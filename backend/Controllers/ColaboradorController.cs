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
    [Authorize (Roles = "Administrador")]    
    public class ColaboradorController : ControllerBase {
        ColaboradorRepository _repositorio = new ColaboradorRepository ();
        //GET: api/Colaborador
        [HttpGet]
        public async Task<ActionResult<List<Colaborador>>> Get () {
            var Colaboradores = await _repositorio.Listar();

            if (Colaboradores == null) {
                return NotFound ();
            }

            return Colaboradores;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/Colaborador/2
        [HttpGet ("{id}")]
        public async Task<ActionResult<Colaborador>> Get (int id) {
            var Colaborador = await _repositorio.BuscarPorID (id);

            if (Colaborador == null) {
                return NotFound ();
            }

            return Colaborador;
        }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/Colaborador
        [HttpPost]
        public async Task<ActionResult<Colaborador>> Post (Colaborador Colaborador) {
            try {
                await _repositorio.Salvar(Colaborador);
            } catch (DbUpdateConcurrencyException) {
                throw;
            }
            return Colaborador;
        }

        //FAZENDO UPDATE NO BANCO
        //PUT api/Colaborador
        [HttpPut ("{id}")]
        public async Task<ActionResult> Put (int id, Colaborador Colaborador) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != Colaborador.IdColaborador) {
                return BadRequest ();
            }
            try {
                await _repositorio.Alterar (Colaborador);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var Colaborador_valido = await _repositorio.BuscarPorID (id);
                if (Colaborador_valido == null) {
                    return NotFound ();
                } else {
                    throw;
                }
            }

            //NoContent = Retorna 204, sem nada
            return NoContent ();
        }

        //FAZENDO DELETE NO BANCO
        [HttpDelete ("{id}")]
        public async Task<ActionResult<Colaborador>> Delete (int id) {
            var Colaborador = await _repositorio.BuscarPorID (id);
            if (Colaborador == null) {
                return NotFound ();
            }
            return Colaborador;
        }

    }
}