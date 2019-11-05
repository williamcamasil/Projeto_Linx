using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories {
    public class UsuarioRepository : IUsuario {
        public async Task<Usuario> Alterar (Usuario Usuario) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                //Faz uma comparação do que foi mudado no Banco
                //Comparamos os atributos que foram modificados através do EF
                _contexto.Entry (Usuario).State = EntityState.Modified;
                //UPDATE Usuario SET titulo = "nt" where id =2
                await _contexto.SaveChangesAsync ();
                return Usuario;
            }
        }

        public async Task<Usuario> BuscarPorID (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                var usuario = await _contexto.Usuario.Include ("IdEnderecoNavigation").FirstOrDefaultAsync (e => e.IdUsuario == id);

                usuario.EmailUsuario = null;
                usuario.SenhaUsuario = null;

                return usuario;
            }
        }

        public async Task<Usuario> Excluir (Usuario Usuario) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                //Selecionando o objeto a ser removido
                _contexto.Usuario.Remove (Usuario);
                //De fato deleta o arquivo
                await _contexto.SaveChangesAsync ();
                return Usuario;
            }
        }

        public async Task<List<Usuario>> Listar () {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                List<Usuario> ListaUsuario = new List<Usuario> ();
                ListaUsuario = await _contexto.Usuario.Include ("IdEnderecoNavigation").ToListAsync ();
                // Tratamos 
                foreach (var user in ListaUsuario) {
                    user.EmailUsuario = null;
                    user.SenhaUsuario = null;
                }
                return ListaUsuario;
            }
        }

        public async Task<Usuario> Salvar (Usuario Usuario) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()) {
                //Tratamos contra ataques de SQL Injection
                await _contexto.AddAsync (Usuario);
                //Salvamos efetivamente o nosso objeto no BD
                await _contexto.SaveChangesAsync ();
                return Usuario;
            }
        }
    }
}