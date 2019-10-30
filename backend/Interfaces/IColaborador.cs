using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;

namespace backend.Interfaces {
    public interface IColaborador {
        Task<List<Colaborador>> Listar ();

        Task<Colaborador> BuscarPorID (int id);

        Task<Colaborador> Salvar (Colaborador Colaborador);

        Task<Colaborador> Alterar (Colaborador Colaborador);

        Task<Colaborador> Excluir (Colaborador Colaborador);
    }
}