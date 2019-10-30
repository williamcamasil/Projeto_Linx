using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;

namespace backend.Interfaces {
    public interface IEndereco {
        Task<List<Endereco>> Listar ();

        Task<Endereco> BuscarPorID (int id);

        Task<Endereco> Salvar (Endereco Endereco);

        Task<Endereco> Alterar (Endereco Endereco);

        Task<Endereco> Excluir (Endereco Endereco);
    }
}
