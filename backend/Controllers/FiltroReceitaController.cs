using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Domains;
using backend.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers {
    [Route ("api/[Controller]")]
    [Produces ("Application/json")]
    [ApiController]
    public class FiltroReceitaController : ControllerBase {
        XepaDigitalContext _context = new XepaDigitalContext ();
        [HttpPost]
        public async Task<ActionResult<List<Receita>>> PostProdutos (FiltroReceitaViewModel search) {
            var rec = await _context.Receita.Where (p =>
                p.NomeReceita.Contains (search.NomeReceita)).ToListAsync ();
            if (rec.Count == 0) {
                return NotFound (
                    new {
                        mensagem = "Produto não encontrado",
                            Erro = true
                    }
                );
            }
            return rec;
        }
    }
}