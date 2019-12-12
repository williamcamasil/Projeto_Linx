using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Domains;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories {
    public class ReceitaRepository : IReceita {
        public async Task<Receita> Alterar (Receita Receita) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                //Faz uma comparação do que foi mudado no Banco
                //Comparamos os atributos que foram modificados através do EF
                _contexto.Entry (Receita).State = EntityState.Modified;
                //UPDATE Receita SET titulo = "nt" where id =2
                await _contexto.SaveChangesAsync ();
                return Receita;
            }
        }

        public async Task<Receita> BuscarPorID (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                return await _contexto.Receita.FindAsync(id);
            }
        }
        public async Task<List<Receita>> BuscarPorIdUser (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                List<Receita> ListaReceita = new List<Receita> ();
                ListaReceita = await _contexto.Receita.Include("IdUsuarioNavigation").Where(e => e.IdUsuario == id).ToListAsync();

                return ListaReceita;
            }
        }

        public async Task<Receita> Excluir (Receita Receita) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                //Selecionando o objeto a ser removido
                _contexto.Receita.Remove (Receita);
                //De fato deleta o arquivo
                await _contexto.SaveChangesAsync ();
                return Receita;
            }
        }

        public async Task<List<Receita>> Listar () {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                return await _contexto.Receita.ToListAsync ();
            }
        }

        public async Task<Receita> Salvar (Receita Receita) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                //Tratamos contra ataques de SQL Injection
                await _contexto.AddAsync (Receita);
                //Salvamos efetivamente o nosso objeto no BD
                await _contexto.SaveChangesAsync ();
                return Receita;
            }
        }
    }
}