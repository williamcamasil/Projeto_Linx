using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Endereco = new HashSet<Endereco>();
            Receita = new HashSet<Receita>();
            RegistroProduto = new HashSet<RegistroProduto>();
            ReservaProduto = new HashSet<ReservaProduto>();
        }

        [Key]
        public int IdUsuario { get; set; }
        [Required]
        [StringLength(255)]
        public string NomeUsuario { get; set; }
        [Required]
        [StringLength(255)]
        public string EmailUsuario { get; set; }
        [Required]
        [StringLength(20)]
        public string SenhaUsuario { get; set; }
        public bool? ReceberNotif { get; set; }
        [StringLength(20)]
        public string Documento { get; set; }
        [StringLength(255)]
        public string ImgPerfil { get; set; }
        [StringLength(15)]
        public string Telefone1 { get; set; }
        [StringLength(15)]
        public string Telefone2 { get; set; }
        [StringLength(20)]
        public string TipoUsuario { get; set; }
        [Column(TypeName = "text")]
        public string SobreColab { get; set; }
        public bool? FazEntrega { get; set; }
        [StringLength(255)]
        public string RazaoSocial { get; set; }

        [InverseProperty("IdUsuarioNavigation")]
        public virtual ICollection<Endereco> Endereco { get; set; }
        [InverseProperty("IdUsuarioNavigation")]
        public virtual ICollection<Receita> Receita { get; set; }
        [InverseProperty("IdUsuarioNavigation")]
        public virtual ICollection<RegistroProduto> RegistroProduto { get; set; }
        [InverseProperty("IdUsuarioNavigation")]
        public virtual ICollection<ReservaProduto> ReservaProduto { get; set; }
    }
}
