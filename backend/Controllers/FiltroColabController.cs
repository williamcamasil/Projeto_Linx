using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Domains;
using backend.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers {
    [Route ("api/[Controller]")]
    [Produces ("Application/json")] // O que é isso mesmo??? força retorno do controle ser em jason
    [ApiController]
    public class FiltroColabController : ControllerBase {
        XepaDigitalContext _context = new XepaDigitalContext ();
        [HttpPost]
        public async Task<ActionResult<List<Usuario>>> PostColab (FiltroColabViewModel search) {
            if (search.NomeColab == "") {
                return BadRequest (
                    new {
                        mensagem = "Não foi especificado um usuario valido"
                    }
                );
            }
            // TRATAMENTO DE ERRO ESTÁ CORRETO É NECESSÁRIO NO CONTEXTO ATUAL???
            var user = await _context.Usuario.Where (p =>
                p.NomeUsuario.Contains (search.NomeColab)).ToListAsync ();
            if (user.Count == 0) {
                return NotFound (
                    new {
                        mensagem = "Produto não encontrado"
                    }

                );
            }
            return user;
        }
    }
}

// Contains %LIKE%, StartsWith LIKE%, EndsWith %LIKE