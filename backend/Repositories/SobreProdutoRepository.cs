using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories {
    public class SobreProdutoRepository : ISobreProduto {
        public async Task<SobreProduto> Alterar (SobreProduto SobreProduto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Faz uma comparação do que foi mudado no Banco
                //Comparamos os atributos que foram modificados através do EF
                _contexto.Entry (SobreProduto).State = EntityState.Modified;
                //UPDATE SobreProduto SET titulo = "nt" where id =2
                await _contexto.SaveChangesAsync ();
                return SobreProduto;
            }
        }

        public async Task<SobreProduto> BuscarPorID (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.SobreProduto.FindAsync(id);
            }
        }

        public async Task<SobreProduto> Excluir (SobreProduto SobreProduto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Selecionando o objeto a ser removido
                _contexto.SobreProduto.Remove (SobreProduto);
                //De fato deleta o arquivo
                await _contexto.SaveChangesAsync ();
                return SobreProduto;
            }
        }

        public async Task<List<SobreProduto>> Listar () {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.SobreProduto.ToListAsync();
            }
        }

        public async Task<SobreProduto> Salvar (SobreProduto SobreProduto) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Tratamos contra ataques de SQL Injection
                await _contexto.AddAsync(SobreProduto);
                //Salvamos efetivamente o nosso objeto no BD
                await _contexto.SaveChangesAsync();
                return SobreProduto;
            }
        }
    }
}