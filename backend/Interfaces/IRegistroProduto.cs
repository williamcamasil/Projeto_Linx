using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;

namespace backend.Interfaces {
    public interface IRegistroProduto {
        Task<List<RegistroProduto>> Listar ();

        Task<RegistroProduto> BuscarPorID (int id);

        Task<RegistroProduto> Salvar (RegistroProduto RegistroProduto);

        Task<RegistroProduto> Alterar (RegistroProduto RegistroProduto);

        Task<RegistroProduto> Excluir (RegistroProduto RegistroProduto);
    }
}