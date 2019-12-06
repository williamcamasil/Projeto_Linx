
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using backend.Domains;

namespace backend.ViewModels {
    public class updateUsuarioViewModel{
        [Key]
        public int IdUsuario { get; set; }
        [Required]
        [StringLength(255)]
        public string NomeUsuario { get; set; }
        [Required]
        [StringLength(255)]
        public string EmailUsuario { get; set; }
        [StringLength(20)]
        public string Documento { get; set; }
        [StringLength(255)]
        public string ImgPerfil { get; set; }
        [StringLength(15)]
        public string Telefone1 { get; set; }
        [StringLength(15)]
        public string Telefone2 { get; set; }
        [StringLength(20)]
        public bool? ReceberNotif { get; set; }
        [StringLength(255)]
        public string RazaoSocial { get; set; }
        public bool? FazEntrega { get; set; }
        [Column(TypeName = "text")]
        public string SobreColab { get; set; }
    }
}