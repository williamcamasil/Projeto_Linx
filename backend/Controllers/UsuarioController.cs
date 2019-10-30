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
    public class UsuarioController : ControllerBase {
        UsuarioRepository _repositorio = new UsuarioRepository ();
        //GET: api/Usuario
        [HttpGet]
        public async Task<ActionResult<List<Usuario>>> Get () {
            var Usuarios = await _repositorio.Listar ();

            if (Usuarios == null) {
                return NotFound ();
            }

            return Usuarios;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/Usuario/2
        [HttpGet ("{id}")]
        public async Task<ActionResult<Usuario>> Get (int id) {
            var Usuario = await _repositorio.BuscarPorID (id);

            if (Usuario == null) {
                return NotFound ();
            }

            return Usuario;
        }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/Usuario
        [HttpPost]
        public async Task<ActionResult<Usuario>> Post (Usuario Usuario) {
            try {
                await _repositorio.Salvar (Usuario);
            } catch (DbUpdateConcurrencyException) {
                throw;

            }

            return Usuario;
        }

        //FAZENDO UPDATE NO BANCO
        [HttpPut ("{id}")]
        public async Task<ActionResult> Put (int id, Usuario Usuario) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != Usuario.IdUsuario) {
                return BadRequest ();
            }
            try {
                await _repositorio.Alterar (Usuario);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var Usuario_valido = await _repositorio.BuscarPorID (id);
                if (Usuario_valido == null) {
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
        public async Task<ActionResult<Usuario>> Delete (int id) {
            var Usuario = await _repositorio.BuscarPorID (id);
            if (Usuario == null) {
                return NotFound ();
            }
            return Usuario;
        }

    }
}