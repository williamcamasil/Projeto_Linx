using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace backend.Repositories {
    public class RegistroProdutoRepository : IRegistroProduto {
        public async Task<RegistroProduto> Alterar (RegistroProduto RegistroProduto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Faz uma comparação do que foi mudado no Banco
                //Comparamos os atributos que foram modificados através do EF
                _contexto.Entry(RegistroProduto).State = EntityState.Modified;
                //UPDATE RegistroProduto SET titulo = "nt" where id =2
                await _contexto.SaveChangesAsync();
                return RegistroProduto;
            }
        }

        public async Task<List<RegistroProduto>> BuscarProdutosPorIdUser (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                List<RegistroProduto> ListaRegistro = new List<RegistroProduto> ();
                ListaRegistro = await _contexto.RegistroProduto.Include("IdProdutoNavigation").Include("IdUsuarioNavigation").Where(e => e.IdUsuario == id).ToListAsync ();
                
                return ListaRegistro;
            }
        }
        public async Task<RegistroProduto> BuscarProdutosPorIdProduto (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.RegistroProduto.Include("IdProdutoNavigation").Include("IdUsuarioNavigation").FirstOrDefaultAsync(e => e.IdProduto == id);
            }
        }

        public async Task<RegistroProduto> BuscarPorID (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.RegistroProduto.Include("IdProdutoNavigation").Include("IdUsuarioNavigation").FirstOrDefaultAsync(e => e.IdRegistro == id);
            }
        }

        public async Task<RegistroProduto> Excluir (RegistroProduto RegistroProduto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Selecionando o objeto a ser removido
                _contexto.RegistroProduto.Remove(RegistroProduto);
                //De fato deleta o arquivo
                await _contexto.SaveChangesAsync();
                return RegistroProduto;
            }
        }

        public async Task<List<RegistroProduto>> Listar () {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.RegistroProduto.Include("IdProdutoNavigation").Include("IdUsuarioNavigation").ToListAsync();
            }
        }

        public async Task<RegistroProduto> Salvar (RegistroProduto RegistroProduto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Tratamos contra ataques de SQL Injection
                await _contexto.AddAsync(RegistroProduto);
                //Salvamos efetivamente o nosso objeto no BD
                await _contexto.SaveChangesAsync();
                return RegistroProduto;
            }
        }
    }
}