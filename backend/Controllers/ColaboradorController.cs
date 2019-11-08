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
    public class ColaboradorController : ControllerBase {
        ColaboradorRepository _repositorio = new ColaboradorRepository ();
        //GET: api/Colaborador
        [HttpGet]
        [Authorize (Roles = "Administrador")]
        public async Task<ActionResult<List<Colaborador>>> Get () {
            var Colaboradores = await _repositorio.Listar ();

            if (Colaboradores == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível listar os Colaboradores"
                    }
                );
            }
            return Colaboradores;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/Colaborador/2
        [HttpGet ("{id}")]
        [Authorize (Roles = "Administrador Colaborador")]
        public async Task<ActionResult<Colaborador>> Get (int id) {
            var Colaborador = await _repositorio.BuscarPorID (id);

            if (Colaborador == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter o Colaborador"
                    }
                );
            }

            return Colaborador;
        }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/Colaborador
        [HttpPost]
        [Authorize (Roles = "Administrador Colaborador")]
        public async Task<ActionResult<Colaborador>> Post (Colaborador Colaborador) {
            try {
                await _repositorio.Salvar (Colaborador);
            } catch (DbUpdateConcurrencyException) {
                throw;
            }
            return Colaborador;
        }

        //FAZENDO UPDATE NO BANCO
        //PUT api/Colaborador
        [HttpPut ("{id}")]
        [Authorize (Roles = "Administrador Colaborador")]
        public async Task<ActionResult> Put (int id, Colaborador Colaborador) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != Colaborador.IdColaborador) {
                return BadRequest (
                    new {
                        Mensagem = "Id incompatível, Não foi possível fazer a atualização"
                    }
                );
            }
            try {
                await _repositorio.Alterar (Colaborador);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var Colaborador_valido = await _repositorio.BuscarPorID (id);
                if (Colaborador_valido == null) {
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
        public async Task<ActionResult<Colaborador>> Delete (int id) {
            var Colaborador = await _repositorio.BuscarPorID (id);
            if (Colaborador == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter as informações"
                    }
                );
            }
            return Colaborador;
        }

    }
}