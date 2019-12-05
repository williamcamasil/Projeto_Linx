using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories {
    public class EnderecoRepository : IEndereco {
        public async Task<Endereco> Alterar (Endereco Endereco) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Faz uma comparação do que foi mudado no Banco
                //Comparamos os atributos que foram modificados através do EF
                _contexto.Entry (Endereco).State = EntityState.Modified;
                //UPDATE Endereco SET titulo = "nt" where id =2
                await _contexto.SaveChangesAsync ();
                return Endereco;
            }
        }

        public async Task<Endereco> BuscarPorID (int id) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.Endereco.Include("IdUsuarioNavigation").FirstOrDefaultAsync (e => e.IdUsuario == id);
            }
        }

        public async Task<Endereco> Excluir (Endereco Endereco) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Selecionando o objeto a ser removido
                _contexto.Endereco.Remove (Endereco);
                //De fato deleta o arquivo
                await _contexto.SaveChangesAsync ();
                return Endereco;
            }
        }

        public async Task<List<Endereco>> Listar () {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                return await _contexto.Endereco.Include("IdUsuarioNavigation").ToListAsync ();
            }
        }

        public async Task<Endereco> Salvar (Endereco Endereco) {
            using (XepaDigitalContext _contexto = new XepaDigitalContext ()){
                //Tratamos contra ataques de SQL Injection
                await _contexto.AddAsync (Endereco);
                //Salvamos efetivamente o nosso objeto no BD
                await _contexto.SaveChangesAsync ();
                return Endereco;
            }
        }
    }
}