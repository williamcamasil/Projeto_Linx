 using System.Collections.Generic;
 using System.Linq;
 using System.Security.Claims;
 using System.Threading.Tasks;
 using System;
 using backend.Domains;
 using backend.Repositories;
 using Microsoft.AspNetCore.Mvc;
 using Microsoft.EntityFrameworkCore;

 namespace backend.Controllers {
     //Definimos nossa rota do controller e dizemos que é um controller de API
     [Route ("api/[Controller]")]
     [ApiController]
     public class ReservaColaboradorController : ControllerBase {
         ReservaProdutoRepository _repositorio = new ReservaProdutoRepository ();

         [HttpGet ("{id}")]
         public async Task<ActionResult<List<ReservaProduto>>> GetReservasColaborador (int id) {
             List<ReservaProduto> ListaReserva = new List<ReservaProduto> ();
             ListaReserva = await _repositorio.BuscarReservaPorIdColaborador (id);

             if (ListaReserva == null) {
                 return NotFound (
                     new {
                         Mensagem = "Não foi possível obter a Reserva"
                     }
                 );
             }

             return ListaReserva;
         }
     }
 }