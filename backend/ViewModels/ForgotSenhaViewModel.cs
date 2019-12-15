using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels {
    public class ForgotSenhaViewModel {
        [Required]
        [StringLength (255)]
        public string NomeUsuario { get; set; }

        [Required]
        [StringLength (255)]
        public string EmailUsuario { get; set; }
    }
}