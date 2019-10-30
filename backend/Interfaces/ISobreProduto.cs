using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;

namespace backend.Interfaces {
    public interface ISobreProduto {
        Task<List<SobreProduto>> Listar ();

        Task<SobreProduto> BuscarPorID (int id);

        Task<SobreProduto> Salvar (SobreProduto SobreProduto);

        Task<SobreProduto> Alterar (SobreProduto SobreProduto);

        Task<SobreProduto> Excluir (SobreProduto SobreProduto);
    }
}