
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using backend.Domains;

namespace backend.ViewModels {
    public class updateSenhaViewModel{
        [Required]
        [StringLength(20)]
        public string NovaSenha { get; set; }
    }
}