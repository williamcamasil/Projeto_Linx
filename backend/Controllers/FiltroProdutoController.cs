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
        [HttpPost]
        public async Task<ActionResult<List<Produto>>> PostProdutos (FiltroProdutoViewModel search) {
            if (search.NomeProduto == "") {
                return BadRequest (
                    new {
                        mensagem = "Não foi especificado um produto valido"
                    }
                );
            }
            // TRATAMENTO DE ERRO ESTÁ CORRETO É NECESSÁRIO NO CONTEXTO ATUAL???
            var prod = await _context.Produto.Where (p =>
                p.NomeProduto.StartsWith (search.NomeProduto)).ToListAsync ();
            if (prod.Count == 0) {
                return NotFound (
                    new {
                        mensagem = "Produto não encontrado"
                    }

                );
            }
            return prod;
        }
    }
}

// Contains %LIKE%, StartsWith LIKE%, EndsWith %LIKE