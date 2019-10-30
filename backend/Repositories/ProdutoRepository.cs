using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories {
    public class ProdutoRepository : IProduto {
        public async Task<Produto> Alterar (Produto Produto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Faz uma comparação do que foi mudado no Banco
                //Comparamos os atributos que foram modificados através do EF
                _contexto.Entry (Produto).State = EntityState.Modified;
                //UPDATE Produto SET titulo = "nt" where id =2
                await _contexto.SaveChangesAsync ();
                return Produto;
            }
        }

        public async Task<Produto> BuscarPorID (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.Produto.Include ("IdSobreProdutoNavigation").FirstOrDefaultAsync (e => e.IdProduto == id);
            }
        }

        public async Task<Produto> Excluir (Produto Produto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Selecionando o objeto a ser removido
                _contexto.Produto.Remove (Produto);
                //De fato deleta o arquivo
                await _contexto.SaveChangesAsync ();
                return Produto;
            }
        }

        public async Task<List<Produto>> Listar () {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.Produto.Include ("IdSobreProdutoNavigation").ToListAsync ();
            }
        }

        public async Task<Produto> Salvar (Produto Produto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Tratamos contra ataques de SQL Injection
                await _contexto.AddAsync (Produto);
                //Salvamos efetivamente o nosso objeto no BD
                await _contexto.SaveChangesAsync ();
                return Produto;
            }
        }
    }
}