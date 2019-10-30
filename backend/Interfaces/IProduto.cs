using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;

namespace backend.Interfaces {
    public interface IProduto {
        Task<List<Produto>> Listar ();

        Task<Produto> BuscarPorID (int id);

        Task<Produto> Salvar (Produto Produto);

        Task<Produto> Alterar (Produto Produto);

        Task<Produto> Excluir (Produto Produto);
    }
}
