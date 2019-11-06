using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domains
{
    public partial class Produto
    {
        public Produto()
        {
            RegistroProduto = new HashSet<RegistroProduto>();
            ReservaProduto = new HashSet<ReservaProduto>();
        }

        [Key]
        public int IdProduto { get; set; }
        [Required]
        [StringLength(255)]
        public string NomeProduto { get; set; }
        [StringLength(255)]
        public string ImgProduto { get; set; }
        [StringLength(255)]
        public string DescricaoProduto { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal? Disponibilidade { get; set; }
        public bool? Organico { get; set; }
        [StringLength(20)]
        public string Preco { get; set; }
        [Required]
        [StringLength(20)]
        public string Validade { get; set; }

        [InverseProperty("IdProdutoNavigation")]
        public virtual ICollection<RegistroProduto> RegistroProduto { get; set; }
        [InverseProperty("IdProdutoNavigation")]
        public virtual ICollection<ReservaProduto> ReservaProduto { get; set; }
    }
}
