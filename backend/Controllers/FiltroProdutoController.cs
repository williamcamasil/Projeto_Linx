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
    public class FiltroProdutoController : ControllerBase {
        XepaDigitalContext _context = new XepaDigitalContext ();
        [HttpGet]
        public async Task<ActionResult<List<Produto>>> GetProdutos (FiltroProdutoViewModel search) {
            // if (search == null) {
            //     return BadRequest (
            //         new {
            //             mensagem = "Não foi especificado um produto valido",
            //                 Erro = true
            //         }
            //     );
            // }
            // TRATAMENTO DE ERRO ESTÁ CORRETO É NECESSÁRIO NO CONTEXTO ATUAL???
            var prod = await _context.Produto.Include ("IdSobreProdutoNavigation").Where (p =>
                p.NomeProduto.StartsWith (search.NomeProduto)).ToListAsync ();
            if (prod.Count == 0) {
                return NotFound (
                    new {
                        mensagem = "Produto não encontrado",
                            Erro = true
                    }

                );
            }
            return prod;
        }
    }
}

// Contains %LIKE%, StartsWith LIKE%, EndsWith %LIKE