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
        [Column(TypeName = "numeric(10, 1)")]
        public decimal? Disponibilidade { get; set; }
        public bool? Organico { get; set; }
        [Column(TypeName = "numeric(10, 1)")]
        public decimal? Preco { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? Validade { get; set; }

        [InverseProperty("IdProdutoNavigation")]
        public virtual ICollection<RegistroProduto> RegistroProduto { get; set; }
    }
}
