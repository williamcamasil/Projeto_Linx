using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;

namespace backend.Interfaces {
    public interface IUsuario {
        Task<List<Usuario>> Listar ();

        Task<Usuario> BuscarPorID (int id);

        Task<Usuario> Salvar (Usuario Usuario);

        Task<Usuario> Alterar (Usuario Usuario);

        Task<Usuario> Excluir (Usuario Usuario);
    }
}