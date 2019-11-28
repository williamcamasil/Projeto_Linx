using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domains
{
    public partial class Endereco
    {
        [Key]
        public int IdEndereco { get; set; }
        [Column("Endereco")]
        [StringLength(255)]
        public string Endereco1 { get; set; }
        [StringLength(10)]
        public string Numero { get; set; }
        [Column("CEP")]
        [StringLength(9)]
        public string Cep { get; set; }
        [StringLength(255)]
        public string Cidade { get; set; }
        [StringLength(255)]
        public string Bairro { get; set; }
        [StringLength(2)]
        public string Estado { get; set; }
        public int? IdUsuario { get; set; }

        [ForeignKey(nameof(IdUsuario))]
        [InverseProperty(nameof(Usuario.Endereco))]
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
