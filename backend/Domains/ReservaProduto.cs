using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domains
{
    public partial class ReservaProduto
    {
        [Key]
        public int IdReserva { get; set; }
        [Column(TypeName = "numeric(10, 1)")]
        public decimal QuantidadeReserva { get; set; }
        [StringLength(50)]
        public string Situacao { get; set; }
        public int? IdRegistro { get; set; }
        public int? IdUsuario { get; set; }

        [ForeignKey(nameof(IdRegistro))]
        [InverseProperty(nameof(RegistroProduto.ReservaProduto))]
        public virtual RegistroProduto IdRegistroNavigation { get; set; }
        [ForeignKey(nameof(IdUsuario))]
        [InverseProperty(nameof(Usuario.ReservaProduto))]
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
