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
    public class ReceitaController : ControllerBase {
        ReceitaRepository _repositorio = new ReceitaRepository ();
        UploadRepository _UploadImg = new UploadRepository ();
        //GET: api/Receita
        [HttpGet]
        public async Task<ActionResult<List<Receita>>> Get () {
            var Receitas = await _repositorio.Listar ();

            if (Receitas == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível listar as Receitas"
                    }
                );
            }
            return Receitas;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/Receita/2
        [HttpGet ("{id}")]
        public async Task<ActionResult<Receita>> Get (int id) {
            var Receita = await _repositorio.BuscarPorID (id);

            if (Receita == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter a Receita"
                    }
                );
            }

            return Receita;
        }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/Receita
        [HttpPost]
        [Authorize (Roles = "Administrador, Cliente")]
        public async Task<ActionResult<Receita>> Post ([FromForm] Receita Receita) {
            try {
                // var idPostagemRec = HttpContext.User.Identity as ClaimsIdentity;
                // IEnumerable<Claim> claim = idPostagemRec.Claims;
                // var idClaim = claim.Where (x => x.Type == "Id").FirstOrDefault ();

                // Receita.IdUsuario = int.Parse(idClaim.Value);


                var imagem = Request.Form.Files[0];

                Receita.ImgReceita = _UploadImg.Upload (imagem, "Receitas");
                Receita.NomeReceita = Request.Form["NomeReceita"].ToString ();
                Receita.DescricaoIngrediente = Request.Form["DescricaoIngrediente"].ToString ();
                Receita.DescricaoPreparo = Request.Form["DescricaoPreparo"].ToString ();
                Receita.IdUsuario = int.Parse(Request.Form["IdUsuario"]);

                await _repositorio.Salvar (Receita);
            } catch (DbUpdateConcurrencyException) {
                throw;
            }
            return Receita;
        }

        //FAZENDO UPDATE NO BANCO
        [HttpPut ("{id}")]
        [Authorize (Roles = "Administrador, Cliente")]

        public async Task<ActionResult> Put (int id, Receita Receita) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != Receita.IdReceita) {
                return BadRequest (
                    new {
                        Mensagem = "Id incompatível, Não foi possível fazer a atualização"
                    }
                );
            }
            try {
                await _repositorio.Alterar (Receita);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var Receita_valido = await _repositorio.BuscarPorID (id);
                if (Receita_valido == null) {
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
        [Authorize (Roles = "Administrador")]
        public async Task<ActionResult<Receita>> Delete (int id) {
            var Receita = await _repositorio.BuscarPorID (id);
            if (Receita == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter as informações"
                    }
                );
            }
            await _repositorio.Excluir (Receita);
            return Receita;
        }

    }
}