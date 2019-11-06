using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels {
    public class LoginViewModel {
        [Required(ErrorMessage = "Digite o E-mail")]
        [EmailAddress(ErrorMessage = "E-mail com formato inválido")]
        public string EmailUsuario { get; set; }
        
        [Required(ErrorMessage = "Digite a senha")]
        [StringLength (255, MinimumLength = 3, ErrorMessage = "A senha deve conter no mínimo 3 caracteres")]
        [DataType(DataType.Password)]
        public string SenhaUsuario { get; set; }
    }
}