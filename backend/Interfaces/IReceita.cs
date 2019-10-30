using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;

namespace backend.Interfaces {
    public interface IReceita {
        Task<List<Receita>> Listar ();

        Task<Receita> BuscarPorID (int id);

        Task<Receita> Salvar (Receita Receita);

        Task<Receita> Alterar (Receita Receita);

        Task<Receita> Excluir (Receita Receita);
    }
}