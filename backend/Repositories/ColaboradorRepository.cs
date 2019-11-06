using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories {
    public class ColaboradorRepository : IColaborador {
        public async Task<Colaborador> Alterar (Colaborador Colaborador) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                //Faz uma comparação do que foi mudado no Banco
                //Comparamos os atributos que foram modificados através do EF
                _contexto.Entry (Colaborador).State = EntityState.Modified;
                //UPDATE Colaborador SET titulo = "nt" where id =2
                await _contexto.SaveChangesAsync ();
                return Colaborador;
            }
        }

        public async Task<Colaborador> BuscarPorID (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                return await _contexto.Colaborador.Include ("IdUsuarioNavigation").FirstOrDefaultAsync (e => e.IdColaborador == id);
            }
        }

        public async Task<Colaborador> Excluir (Colaborador Colaborador) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                _contexto.Colaborador.Remove (Colaborador);
                //De fato deleta o arquivo
                await _contexto.SaveChangesAsync ();
                return Colaborador;
            }
        }

        public async Task<List<Colaborador>> Listar () {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                return await _contexto.Colaborador.Include ("IdUsuarioNavigation").ToListAsync ();
            }
        }

        public async Task<Colaborador> Salvar (Colaborador Colaborador) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                await _contexto.AddAsync (Colaborador);
                await _contexto.SaveChangesAsync ();
                return Colaborador;
            }
        }
    }
}