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
    public class ProdutoController : ControllerBase {
        ProdutoRepository _repositorio = new ProdutoRepository ();
        //GET: api/Produto
        [HttpGet]
        public async Task<ActionResult<List<Produto>>> Get () {
            var Produtos = await _repositorio.Listar();
            if (Produtos == null) {
                return NotFound ();
            }
            return Produtos;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/Produto/2
        [HttpGet ("{id}")]
        public async Task<ActionResult<Produto>> Get (int id) {
            var Produto = await _repositorio.BuscarPorID (id);
            if (Produto == null) {
                return NotFound ();
            }
            return Produto;
        }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/Produto
        [HttpPost]
        public async Task<ActionResult<Produto>> Post (Produto Produto) {
            try {
                await _repositorio.Salvar (Produto);
            } catch (DbUpdateConcurrencyException) {
                throw;
            }
            return Produto;
        }

        //FAZENDO UPDATE NO BANCO
        [HttpPut ("{id}")]
        public async Task<ActionResult> Put (int id, Produto Produto) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != Produto.IdProduto) {
                return BadRequest ();
            }            
            try {
                await _repositorio.Alterar (Produto);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var Produto_valido = await _repositorio.BuscarPorID (id);
                if (Produto_valido == null) {
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
        public async Task<ActionResult<Produto>> Delete (int id) {
            var Produto = await _repositorio.BuscarPorID (id);
            if (Produto == null) {
                return NotFound ();
            }
            return Produto;
        }

    }
}