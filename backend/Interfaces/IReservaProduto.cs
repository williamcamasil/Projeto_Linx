using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;

namespace backend.Interfaces
{
    public interface IReservaProduto
    {
        Task<List<ReservaProduto>> Listar ();

        Task<ReservaProduto> BuscarPorID (int id);

        Task<ReservaProduto> Salvar (ReservaProduto ReservaProduto);

        Task<ReservaProduto> Alterar (ReservaProduto ReservaProduto);

        Task<ReservaProduto> Excluir (ReservaProduto ReservaProduto);
    }
}