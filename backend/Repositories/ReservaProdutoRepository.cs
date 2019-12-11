using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Domains;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories {
    public class ReservaProdutoRepository : IReservaProduto {
        public async Task<ReservaProduto> Alterar (ReservaProduto ReservaProduto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Faz uma comparação do que foi mudado no Banco
                //Comparamos os atributos que foram modificados através do EF
                _contexto.Entry(ReservaProduto).State = EntityState.Modified;
                //UPDATE ReservaProduto SET titulo = "nt" where id =2
                await _contexto.SaveChangesAsync();
                return ReservaProduto;
            }
        }

        public async Task<List<ReservaProduto>> BuscarReservaPorIdCliente (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext()){
                List<ReservaProduto> ListaReserva = new List<ReservaProduto> ();
                ListaReserva = await _contexto.ReservaProduto.Include("IdRegistroNavigation.IdUsuarioNavigation").Include("IdRegistroNavigation.IdProdutoNavigation").Include("IdUsuarioNavigation").Where(e => e.IdUsuario == id).ToListAsync ();

                return ListaReserva;
            }
        }
        public async Task<List<ReservaProduto>> BuscarReservaPorIdColaborador (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext()){
                List<ReservaProduto> ListaReserva = new List<ReservaProduto> ();
                ListaReserva = await _contexto.ReservaProduto.Include("IdRegistroNavigation.IdUsuarioNavigation").Include("IdRegistroNavigation.IdProdutoNavigation").Include("IdUsuarioNavigation").Where(e => e.IdRegistroNavigation.IdUsuarioNavigation.IdUsuario == id).ToListAsync ();

                return ListaReserva;
            }
        }

        public async Task<ReservaProduto> BuscarPorID (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.ReservaProduto.Include("IdRegistroNavigation.IdUsuarioNavigation").Include("IdRegistroNavigation.IdProdutoNavigation").Include("IdUsuarioNavigation").FirstOrDefaultAsync(e => e.IdReserva == id);
            }
        }

        public async Task<ReservaProduto> Excluir (ReservaProduto ReservaProduto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Selecionando o objeto a ser removido
                _contexto.ReservaProduto.Remove(ReservaProduto);
                //De fato deleta o arquivo
                await _contexto.SaveChangesAsync();
                return ReservaProduto;
            }
        }

        public async Task<List<ReservaProduto>> Listar () {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.ReservaProduto.Include("IdRegistroNavigation.IdUsuarioNavigation").Include("IdRegistroNavigation.IdProdutoNavigation").Include("IdUsuarioNavigation").ToListAsync();
            }
        }

        public async Task<ReservaProduto> Salvar (ReservaProduto ReservaProduto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Tratamos contra ataques de SQL Injection
                await _contexto.AddAsync(ReservaProduto);
                //Salvamos efetivamente o nosso objeto no BD
                await _contexto.SaveChangesAsync();
                return ReservaProduto;
            }
        }
    }
}