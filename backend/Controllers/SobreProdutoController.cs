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
    public class SobreProdutoController : ControllerBase {
        SobreProdutoRepository _repositorio = new SobreProdutoRepository ();
        //GET: api/SobreProduto
        [HttpGet]
        public async Task<ActionResult<List<SobreProduto>>> Get () {
            var SobreProdutos = await _repositorio.Listar ();

            if (SobreProdutos == null) {
                return NotFound ();
            }

            return SobreProdutos;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/SobreProduto/2
        [HttpGet ("{id}")]
        public async Task<ActionResult<SobreProduto>> Get (int id) {
            var SobreProduto = await _repositorio.BuscarPorID (id);

            if (SobreProduto == null) {
                return NotFound ();
            }

            return SobreProduto;
        }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/SobreProduto
        [HttpPost]
        public async Task<ActionResult<SobreProduto>> Post (SobreProduto SobreProduto) {
            try {
                await _repositorio.Salvar (SobreProduto);
            } catch (DbUpdateConcurrencyException) {
                throw;
            }
            return SobreProduto;
        }

        //FAZENDO UPDATE NO BANCO
        [HttpPut ("{id}")]
        public async Task<ActionResult> Put (int id, SobreProduto SobreProduto) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != SobreProduto.IdSobreProduto) {
                return BadRequest ();
            }
            try {
                await _repositorio.Alterar (SobreProduto);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var SobreProduto_valido = await _repositorio.BuscarPorID (id);
                if (SobreProduto_valido == null) {
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
        public async Task<ActionResult<SobreProduto>> Delete (int id) {
            var SobreProduto = await _repositorio.BuscarPorID (id);
            if (SobreProduto == null) {
                return NotFound ();
            }
            return SobreProduto;
        }

    }
}