using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers {
    [Route ("api/[Controller]")]
    [ApiController]
    public class ColaboradorController : ControllerBase {

        UsuarioRepository _repositorio = new UsuarioRepository ();

        [HttpGet]
        public async Task<ActionResult<List<Usuario>>> GetColaborador () {
            
            List<Usuario> ListaColaborador = new List<Usuario> ();
            ListaColaborador = await _repositorio.ListarPorROLE();

            return ListaColaborador;
        }
    }
}