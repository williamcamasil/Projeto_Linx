using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers {
    //Definimos nossa rota do controller e dizemos que é um controller de API
    [Route ("api/[Controller]")]
    [ApiController]
    public class RegistroProdutoController : ControllerBase {
        RegistroProdutoRepository _repositorio = new RegistroProdutoRepository ();
        //GET: api/RegistroProduto
        [HttpGet]
        public async Task<ActionResult<List<RegistroProduto>>> Get () {
            var RegistroProdutos = await _repositorio.Listar ();

            if (RegistroProdutos == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível listar os Registros"
                    }
                );
            }

            return RegistroProdutos;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/RegistroProduto/2
        [HttpGet ("{id}")]
        public async Task<ActionResult<RegistroProduto>> Get (int id) {
            var RegistroProduto = await _repositorio.BuscarPorID (id);

            if (RegistroProduto == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter o Registro"
                    }
                );
            }

            return RegistroProduto;
        }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/RegistroProduto
        [HttpPost]
        public async Task<ActionResult<RegistroProduto>> Post (RegistroProduto RegistroProduto) {
            try {
                await _repositorio.Salvar (RegistroProduto);
            } catch (DbUpdateConcurrencyException) {
                throw;
            }
            return RegistroProduto;
        }

        //FAZENDO UPDATE NO BANCO
        [HttpPut ("{id}")]
        public async Task<ActionResult> Put (int id, RegistroProduto RegistroProduto) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != RegistroProduto.IdRegistro) {
                return BadRequest (
                    new {
                        Mensagem = "Id incompatível, Não foi possível fazer a atualização"
                    }
                );
            }
            try {
                await _repositorio.Alterar (RegistroProduto);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var RegistroProduto_valido = await _repositorio.BuscarPorID (id);
                if (RegistroProduto_valido == null) {
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
        public async Task<ActionResult<RegistroProduto>> Delete (int id) {
            var RegistroProduto = await _repositorio.BuscarPorID (id);
            if (RegistroProduto == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter as informações"
                    }
                );
            }
            return RegistroProduto;
        }

    }
}