using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;
using backend.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers {
    //Definimos nossa rota do controller e dizemos que é um controller de API
    [Route ("api/[Controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase {
        UsuarioRepository _repositorio = new UsuarioRepository ();
        EnderecoRepository _repositorioEndereco = new EnderecoRepository ();
        //GET: api/Usuario
        [HttpGet]
        [Authorize (Roles = "Administrador")]
        public async Task<ActionResult<List<Usuario>>> Get () {
            var Usuarios = await _repositorio.Listar ();

            if (Usuarios == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível listar os Usuários"
                    }
                );
            }
            return Usuarios;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/Usuario/2
        [HttpGet ("{id}")]
        [Authorize] // SOMENTE PODE VOLTAR O ID = AO ID QUE ESTÁ LOGADO
        public async Task<ActionResult<Usuario>> Get (int id) {
            var Usuario = await _repositorio.BuscarPorID (id);

            if (Usuario == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter o Usuário"
                    }
                );
            }

            return Usuario;
        }

        // //GET: api/Usuario/Colaborador
        // [HttpGet ("{tipo}")]
        // public async Task<ActionResult<Usuario>> Get (string tipo) {
        //     var Usuario = await _repositorio.BuscarPorROLE (tipo);

        //     if (Usuario == null) {
        //         return NotFound (
        //             new {
        //                 Mensagem = "Não foi possível obter o Usuário"
        //             }
        //         );
        //     }

        //     return Usuario;
        // }

        //FAZENDO ENVIO PARA O BANCO
        //POST api/Usuario
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<Usuario>> Post (Usuario Usuario) {
            try {
                await _repositorio.Salvar (Usuario);

                // Instanciamos o Endereco para chama-lo
                Endereco endereco = new Endereco();
                // Falamos que a chave estrangeira dentro de endereço será o Id do usuario que foi criado
                endereco.IdUsuario = Usuario.IdUsuario;
                // Criamos a tabela de Endereco com o IdUsuario nela, para poder atualiza-la no perfil
                await _repositorioEndereco.Salvar (endereco);
            } catch (DbUpdateConcurrencyException) {
                throw;

            }

            return Usuario;
        }

        //FAZENDO UPDATE NO BANCO
        [HttpPut ("{id}")]
        [Authorize]
        public async Task<ActionResult> Put (int id, Usuario Usuario) {
            //Se o Id do objeto não existir
            //ele retorna 400 
            if (id != Usuario.IdUsuario) {
                return BadRequest (
                    new {
                        Mensagem = "Id incompatível, Não foi possível fazer a atualização"
                    }
                );
            }
            try {
                await _repositorio.Alterar (Usuario);
            } catch (DbUpdateConcurrencyException) {
                //Verificamos se o objeto inserido realmente existe no banco
                var Usuario_valido = await _repositorio.BuscarPorID (id);
                if (Usuario_valido == null) {
                    return NotFound (
                        new {
                            Mensagem = "Não foi possível obter as informações"
                        }
                    );
                } else {
                    throw;
                }
            }

            //NoContent = Retorna 204, sem nada
            return NoContent ();
        }

        //FAZENDO DELETE NO BANCO
        [HttpDelete ("{id}")]
        [Authorize (Roles = "Administrador")]
        public async Task<ActionResult<Usuario>> Delete (int id) {
            var Usuario = await _repositorio.BuscarPorID (id);
            if (Usuario == null) {
                return NotFound (
                    new {
                        Mensagem = "Não foi possível obter as informações"
                    }
                );
            }
            await _repositorio.Excluir(Usuario);
            return Usuario;
        }
    }
}