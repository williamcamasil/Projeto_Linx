using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using backend.Domains;
using backend.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers {
    //Definimos nossa rota do controller e dizemos que é um controller de API
    [Route ("api/[Controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase {
        ProdutoRepository _repositorio = new ProdutoRepository ();
        // Instanciar o Repositório Registro de Produtos
        RegistroProdutoRepository _repositorioRegistro = new RegistroProdutoRepository ();

        UploadRepository _UploadImg = new UploadRepository ();
        //GET: api/Produto
        [HttpGet]
        public async Task<ActionResult<List<Produto>>> Get () {
            var Produtos = await _repositorio.Listar ();
            if (Produtos == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível listar os Produtos"
                    }
                );
            }
            return Produtos;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/Produto/2
        [HttpGet ("{id}")]
        public async Task<ActionResult<Produto>> Get (int id) {
            var Produto = await _repositorio.BuscarPorID (id);
            if (Produto == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter o Produto"
                    }
                );
            }
            return Produto;
        }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/Produto
        [HttpPost]
        [Authorize (Roles = "Administrador, Colaborador")]
        public async Task<ActionResult<Produto>> Post ([FromForm] Produto Produto) {
            try {
                var imagem = Request.Form.Files[0];

                Produto.ImgProduto = _UploadImg.Upload (imagem, "Produtos");
                Produto.NomeProduto = Request.Form["NomeProduto"].ToString ();
                Produto.DescricaoProduto = Request.Form["DescricaoProduto"].ToString ();
                Produto.Disponibilidade = decimal.Parse (Request.Form["Disponibilidade"]);
                Produto.Organico = bool.Parse (Request.Form["Organico"]);
                Produto.Preco = decimal.Parse (Request.Form["Preco"]);
                Produto.Validade = DateTime.Parse (Request.Form["Validade"]);

                await _repositorio.Salvar (Produto);

                // Criando a tabela Registro de produto e passando o IdProduto criado + IdUsuario Logado
                var idPostagemRec = HttpContext.User.Identity as ClaimsIdentity;
                IEnumerable<Claim> claim = idPostagemRec.Claims;
                var idClaim = claim.Where (x => x.Type == ClaimTypes.PrimarySid).FirstOrDefault ();

                // Criando o Objeto Registro
                RegistroProduto registro = new RegistroProduto ();

                // Passando os atributos do Objeto Registro
                registro.IdProduto = Produto.IdProduto;
                registro.IdUsuario = Convert.ToInt32 (idClaim.Value);

                await _repositorioRegistro.Salvar (registro);
            } catch (DbUpdateConcurrencyException) {
                throw;
            }
            return Produto;
        }

        //FAZENDO UPDATE NO BANCO
        [HttpPut ("{id}")]
        [Authorize (Roles = "Administrador, Colaborador")]
        public async Task<ActionResult> Put (int id, [FromForm] Produto Produto) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != Produto.IdProduto) {
                return BadRequest (
                    new {
                        Mensagem = "Id incompatível, Não foi possível fazer a atualização"
                    }
                );
            }
            try {

                if (Request.Form.Files.Count != 0) {
                    var imagem = Request.Form.Files[0];
                    Produto.ImgProduto = _UploadImg.Upload (imagem, "Produtos");
                } else {
                    Produto produtoCadastrado = await _repositorio.BuscarPorID (int.Parse (Request.Form["IdProduto"]));
                    Produto.ImgProduto = produtoCadastrado.ImgProduto;
                }

                Produto.NomeProduto = Request.Form["NomeProduto"].ToString ();
                Produto.Disponibilidade = decimal.Parse (Request.Form["Disponibilidade"]);
                Produto.DescricaoProduto = Request.Form["DescricaoProduto"].ToString ();
                Produto.Organico = bool.Parse (Request.Form["Organico"]);
                Produto.Preco = decimal.Parse (Request.Form["Preco"]);
                Produto.Validade = DateTime.Parse (Request.Form["Validade"]);

                await _repositorio.Alterar (Produto);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var Produto_valido = await _repositorio.BuscarPorID (id);
                if (Produto_valido == null) {
                    return NotFound (
                        new {
                            Mensagem = "Não foi possível obter as informações"
                        }
                    );
                } else {
                    throw;
                }
            }

            //NoContent = Retorna 204, sem nada
            return NoContent ();
        }

        //FAZENDO DELETE NO BANCO
        [HttpDelete ("{id}")]
        [Authorize (Roles = "Administrador, Colaborador")]
        public async Task<ActionResult<Produto>> Delete (int id) {
            var Produto = await _repositorio.BuscarPorID (id);
            if (Produto == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter as informações"
                    }
                );
            }
            await _repositorio.Excluir (Produto);
            return Produto;
        }

    }
}