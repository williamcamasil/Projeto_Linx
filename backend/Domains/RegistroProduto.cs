using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domains
{
    public partial class RegistroProduto
    {
        public RegistroProduto()
        {
            ReservaProduto = new HashSet<ReservaProduto>();
        }

        [Key]
        public int IdRegistro { get; set; }
        public int? IdProduto { get; set; }
        public int? IdUsuario { get; set; }

        [ForeignKey(nameof(IdProduto))]
        [InverseProperty(nameof(Produto.RegistroProduto))]
        public virtual Produto IdProdutoNavigation { get; set; }
        [ForeignKey(nameof(IdUsuario))]
        [InverseProperty(nameof(Usuario.RegistroProduto))]
        public virtual Usuario IdUsuarioNavigation { get; set; }
        [InverseProperty("IdRegistroNavigation")]
        public virtual ICollection<ReservaProduto> ReservaProduto { get; set; }
    }
}
