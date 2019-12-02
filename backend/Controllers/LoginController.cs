using System.Linq;
using backend.Domains;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System;
using Microsoft.AspNetCore.Authorization;
using backend.ViewModels;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [Produces ("Application/json")]
    [ApiController]
    public class LoginController: ControllerBase
    {
        //Chamamos nosso contexto da base de dados
        XepaDigitalContext _context = new XepaDigitalContext();

        // Definimos uma variável para percorrer nossos métodos com as configurações 
        // obtidas no appsettings.json
        private IConfiguration _config;

        //Definimos um método construtor para poder acessar essas configs ^
        public LoginController(IConfiguration config){
            _config = config;
        }

        //Chamamos nosso método para validar o usuário na aplicação
        private Usuario ValidarUsuario(LoginViewModel login){
            var usuario = _context.Usuario.FirstOrDefault(
                u => u.EmailUsuario == login.EmailUsuario &&
                u.SenhaUsuario == login.SenhaUsuario
            );
            return usuario;
        }

        //Geramos o Token
        private string GerarToken(Usuario userInfo){
            //Definimos a criptografia do nosso Token
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"])); 
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);  

            //Definimos nossas Claims (dados da sessão)
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.NameId, userInfo.NomeUsuario),
                new Claim(JwtRegisteredClaimNames.Email, userInfo.EmailUsuario),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.PrimarySid, userInfo.IdUsuario.ToString()),
                new Claim(ClaimTypes.Role, userInfo.TipoUsuario),
                new Claim("Role", userInfo.TipoUsuario)
            }; 

            //Configuramos nosso Token e seu tempo de vida
            var token = new JwtSecurityToken(
                _config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials : credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        //Usamos essa anotação para ignorar a autenticação nesse método
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]LoginViewModel login){
            IActionResult response = Unauthorized();
            var user = ValidarUsuario(login);

            if(user != null){
                var tokenString = GerarToken(user);
                response = Ok( new { token  = tokenString } );
            }

            return response;
        }
        
    }
}