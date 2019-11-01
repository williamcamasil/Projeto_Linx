using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels {
    public class FiltroViewModel {
        [Required]
        [StringLength (255, MinimumLength = 1)]
        public string NomeProduto { get; set; }
    }
}