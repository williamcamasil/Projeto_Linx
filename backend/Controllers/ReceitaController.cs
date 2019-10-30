using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Domains;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    //Definimos nossa rota do controller e dizemos que é um controller de API
    [Route("api/[Controller]")]
    [ApiController]
    public class ReceitaController: ControllerBase
    {
        ReceitaRepository _repositorio = new ReceitaRepository();
        //GET: api/Receita
        [HttpGet]
        public async Task<ActionResult<List<Receita>>> Get(){
            var Receitas = await _repositorio.Listar();

            if(Receitas == null){
                return NotFound();
            }
            return Receitas;
        }

        //FAZENDO SELECT NO BANCO
        //GET: api/Receita/2
        [HttpGet("{id}")]
        public async Task<ActionResult<Receita>> Get(int id){
            var Receita = await _repositorio.BuscarPorID (id);

            if(Receita == null){
                return NotFound();
            }

            return Receita;
        }  

        //FAZENDO ENVIO PARA O BANCO
        //POST api/Receita
        [HttpPost]
        public async Task<ActionResult<Receita>> Post(Receita Receita){
            try
            {
                await _repositorio.Salvar (Receita);   
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;

            }

            return Receita;
        }


        //FAZENDO UPDATE NO BANCO
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Receita Receita){
            //Se o Id do objeto não existir
            //ele retorna 400 
            if(id != Receita.IdReceita){
                return BadRequest();
            }
            try
            {
                   await _repositorio.Alterar (Receita);
            }
            catch (DbUpdateConcurrencyException)
            {
                //Verificamos se o objeto inserido realmente existe no banco
                var Receita_valido = await _repositorio.BuscarPorID (id);
                if(Receita_valido == null){
                    return NotFound();
                }else{
                    throw;
                }
            }

            //NoContent = Retorna 204, sem nada
            return NoContent();
        }

        //FAZENDO DELETE NO BANCO
        [HttpDelete("{id}")]
        public async Task<ActionResult<Receita>> Delete(int id){
            var Receita = await _repositorio.BuscarPorID (id);
            if(Receita == null){
                return NotFound();
            }
            return Receita;
        }

    }
}