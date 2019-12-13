using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;

namespace backend.Interfaces {
    public interface IRegistroProduto {
        Task<List<RegistroProduto>> Listar ();

        Task<List<RegistroProduto>> BuscarProdutosPorIdUser (int id);

        Task<RegistroProduto> BuscarPorID (int id);
        Task<RegistroProduto> BuscarProdutosPorIdProduto (int id);

        Task<RegistroProduto> Salvar (RegistroProduto RegistroProduto);

        Task<RegistroProduto> Alterar (RegistroProduto RegistroProduto);

        Task<RegistroProduto> Excluir (RegistroProduto RegistroProduto);
    }
}