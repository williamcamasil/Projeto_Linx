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
    public class ReservaProdutoController : ControllerBase {
        ReservaProdutoRepository _repositorio = new ReservaProdutoRepository ();
        //GET: api/ReservaProduto
        [HttpGet]
        public async Task<ActionResult<List<ReservaProduto>>> Get () {
            var ReservaProdutos = await _repositorio.Listar ();

            if (ReservaProdutos == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível listar as Reservas"
                    }
                );
            }

            return ReservaProdutos;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/ReservaProduto/2
        [HttpGet ("{id}")]
        public async Task<ActionResult<ReservaProduto>> Get (int id) {
            var ReservaProduto = await _repositorio.BuscarPorID (id);

            if (ReservaProduto == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter a Reserva"
                    }
                );
            }

            return ReservaProduto;
        }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/ReservaProduto
        [HttpPost]
        public async Task<ActionResult<ReservaProduto>> Post (ReservaProduto ReservaProduto) {
            try {
                await _repositorio.Salvar (ReservaProduto);
            } catch (DbUpdateConcurrencyException) {
                throw;
            }
            return ReservaProduto;
        }

        //FAZENDO UPDATE NO BANCO
        [HttpPut ("{id}")]
        public async Task<ActionResult> Put (int id, ReservaProduto ReservaProduto) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != ReservaProduto.IdReserva) {
                return BadRequest (
                    new {
                        Mensagem = "Id incompatível, Não foi possível fazer a atualização"
                    }
                );
            }
            try {
                await _repositorio.Alterar (ReservaProduto);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var ReservaProduto_valido = await _repositorio.BuscarPorID (id);
                if (ReservaProduto_valido == null) {
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
        public async Task<ActionResult<ReservaProduto>> Delete (int id) {
            var ReservaProduto = await _repositorio.BuscarPorID (id);
            if (ReservaProduto == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter as informações"
                    }
                );
            }
            await _repositorio.Excluir (ReservaProduto);
            return ReservaProduto;
        }

    }
}