using System.Collections.Generic;
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
    public class EnderecoController : ControllerBase {
        EnderecoRepository _repositorio = new EnderecoRepository ();
        //GET: api/Endereco
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<List<Endereco>>> Get () {
            var Enderecos = await _repositorio.Listar ();

            if (Enderecos == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível listar os Endereços"
                    }
                );
            }

            return Enderecos;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/Endereco/2
        [HttpGet ("{id}")]
        [Authorize]
        public async Task<ActionResult<Endereco>> Get (int id) {
            var Endereco = await _repositorio.BuscarPorID (id);

            if (Endereco == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter o Endereço"
                    }
                );
            }

            return Endereco;
        }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/Endereco
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Endereco>> Post (Endereco Endereco) {
            try {

                await _repositorio.Salvar (Endereco);
                
            } catch (DbUpdateConcurrencyException) {
                throw;
            }
            return Endereco;
        }

        //FAZENDO UPDATE NO BANCO
        [HttpPut ("{id}")]
        [Authorize]
        public async Task<ActionResult> Put (int id, Endereco Endereco) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != Endereco.IdEndereco) {
                return BadRequest (
                    new {
                        Mensagem = "Id incompatível, Não foi possível fazer a atualização"
                    }
                );
            }

            try {
                await _repositorio.Alterar (Endereco);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var Endereco_valido = await _repositorio.BuscarPorID (id);
                if (Endereco_valido == null) {
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
        public async Task<ActionResult<Endereco>> Delete (int id) {
            var Endereco = await _repositorio.BuscarPorID (id);
            if (Endereco == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter as informações"
                    }
                );
            }
            return Endereco;
        }

    }
}