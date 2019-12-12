using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;

namespace backend.Interfaces {
    public interface IEndereco {
        Task<List<Endereco>> Listar ();

        Task<Endereco> BuscarPorIdUsuario (int id);

        Task<Endereco> BuscarPorIdEndereco (int id);

        Task<Endereco> Salvar (Endereco endereco);

        Task<Endereco> Alterar (Endereco Endereco);

        Task<Endereco> Excluir (Endereco Endereco);
    }
}
