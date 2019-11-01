using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels {
    public class FiltroReceitaViewModel {
        [Required]
        [StringLength (255, MinimumLength = 1)]
        public string NomeReceita { get; set; }
    }
}