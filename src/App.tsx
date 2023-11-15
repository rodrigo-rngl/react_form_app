import { useState } from 'react'
import './styles/global.css'
import {useForm} from 'react-hook-form'


export default function App() {
  const [output, setOutput] = useState(' ')
  const {register, handleSubmit} = useForm()

  function createUserWithInformation(data: any) {
    setOutput(JSON.stringify(data, null, 2))
}

  return (
    <main className='h-screen flex flex-row items-center justify-left bg-zinc-950 text-zinc-300'>
      <form onSubmit={handleSubmit(createUserWithInformation)}
      className='flex flex-col w-2/4 max-w-2xl ring rounded ring-zinc-600 m-8'>
        <fieldset className='pt-3 px-5' id='pessoal'>
          <ul className='flex flex-col gap-3'>
            <li className='flex flex-row gap-3'>
              <label htmlFor='input-nome' className='w-24 text-center'>Nome Completo</label>
              <input type='text' 
              id='input-nome'
              className='rounded border bg-zinc-800 border-zinc-700 text-white px-2 w-4/5'
              {...register('nome')} required></input>
            </li>

            <li className='flex flex-row gap-6'>
              <div className='flex flex-row gap-3'>
                <label htmlFor='input-cpf' className='w-24 text-center'>CPF</label>
                <input type='number' 
                id='input-cpf' 
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2'
                {...register('cpf')}
                required></input>
              </div>
              <div className='flex flex-row gap-3'>
                <label htmlFor='input-sexo'>Sexo</label>
                <select id='input-sexo' 
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2'
                {...register('sexo')}>
                    <option value='masculino'>Masculino</option>
                    <option value='feminino'>Feminino</option>
                    <option value='sem-resposta'>Não responder</option>
                </select>
              </div>
            </li>
            
            <li className='flex flex-row gap-6'>
              <div className='flex flex-row gap-3'>
                <label htmlFor='input-data-nascimento' className='w-24 text-center'>Data de Nascimento</label>
                <input type='date' 
                id='input-data-nascimento' 
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2'
                {...register('data_nascimento')}
                required></input>
              </div>
              <div className='flex flex-row gap-3'>
                <label htmlFor='input-estado_civil'>Est. Civil</label>
                <select id='input-estado-civil' 
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2' 
                {...register('estado_civil')}>
                    <option value='solteiro'>Solteiro</option>
                    <option value='casado'>Casado</option>
                    <option value='viuvo'>Viúvo</option>
                    <option value='divorciado'>Divorciado</option>
                </select>
              </div>
            </li>
          </ul>
        </fieldset>

        <fieldset className='pt-3 px-5' id='contatos'>
          <ul className='flex flex-col gap-3'>
            <li className='flex flex-row gap-3'>
              <label htmlFor='input-email' className='w-24 text-center'>E-mail</label>
              <input type='input-email' 
              id='email' 
              className='rounded border bg-zinc-800 border-zinc-700 text-white px-2 w-4/5'
              {...register('email')} required></input>
            </li>

            <li className='flex flex-row gap-3'>
              <label htmlFor='input-endereco' className='w-24 text-center'>Endereço</label>
              <input  type='text' 
              id='input-endereco' 
              className='rounded border bg-zinc-800 border-zinc-700 text-white px-2 w-4/5'
              {...register('endereco')} required></input>
            </li>

            <li className='flex flex-row gap-6'>
              <div className='flex flex-row gap-3'>
                <label htmlFor='input-cidade' className='w-24 text-center'>Cidade</label>
                <input type='text' 
                id='input-cidade'
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2'
                {...register('cidade')}  required></input>
              </div>
              <div className='flex flex-row gap-3'>
                <label  htmlFor='input-bairro'>Bairro</label>
                <input type='text' 
                id='input-bairro' 
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2 w-4/5'
                {...register('bairro')}  required></input>
              </div>
            </li>

            <li className='flex flex-row gap-6'>
              <div className='flex flex-row gap-3'>
                <label htmlFor='input-cep' className='w-24 text-center'>CEP</label>
                <input type='number' 
                id='input-cep'
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2'
                {...register('cep')} required></input>
              </div>
              <div className='flex flex-row gap-3'>
                <label  htmlFor='input-uf'>UF</label>
                <select id='uf'
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2'
                {...register('uf')}>
                    <option value='AC'>Acre (AC)</option>
                    <option value='AL'>Alagoas (AL)</option>
                    <option value='AP'>Amapá (AP)</option>
                    <option value='AM'>Amazonas (AM)</option>
                    <option value='BA'>Bahia (BA)</option>
                    <option value='CE'>Ceará (CE)</option>
                    <option value='DF'>Distrito Federal (DF)</option>
                    <option value='ES'>Espírito Santo (ES)</option>
                    <option value='GO'>Goiás (GO)</option>
                    <option value='MA'>Maranhão (MA)</option>
                    <option value='MT'>Mato Grosso (MT)</option>
                    <option value='MS'>Mato Grosso do Sul (MS)</option>
                    <option value='MG'>Minas Gerais (MG)</option>
                    <option value='PA'>Pará (PA)</option>
                    <option value='PB'>Paraíba (PB)</option>
                    <option value='PR'>Paraná (PR)</option>
                    <option value='PE'>Pernambuco (PE)</option>
                    <option value='PI'>Piauí (PI)</option>
                    <option value='RJ'>Rio de Janeiro (RJ)</option>
                    <option value='RN'>Rio Grande do Norte (RN)</option>
                    <option value='RS'>Rio Grande do Sul (RS)</option>
                    <option value='RO'>Rondônia (RO)</option>
                    <option value='RR'>Roraima (RR)</option>
                    <option value='SC'>Santa Catarina (SC)</option>
                    <option value='SP'>São Paulo (SP)</option>
                    <option value='SE'>Sergipe (SE)</option>
                    <option value='TO'>Tocantins (TO)</option>
                </select>
              </div>
            </li>

            <li className='flex flex-row gap-6'>
              <div className='flex flex-row gap-3'>
                <label htmlFor='input-telefone' className='w-24 text-center'>Telefone</label>
                <input type='number' 
                id='input-telefone' 
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2'
                {...register('telefone')}></input>
              </div>
              <div className='flex flex-row gap-3'>
                <label  htmlFor='input-celular'>Celular</label>
                <input type='number' 
                id='input-celular'
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2'
                {...register('celular')} required></input>
              </div>
            </li>
            
            <li className='flex flex-row gap-3'>
              <label htmlFor='site' className='w-24 text-center'>Web Site</label>
              <input type='input-url' 
              id='input-site'
              className='rounded border bg-zinc-800 border-zinc-700 text-white px-2 w-4/5'
              {...register('web_site')}></input>
            </li>
          </ul>
        </fieldset>

        <fieldset className='pt-3 px-5' id='cadastro'>
          <ul className='flex flex-col gap-3 items-center justify-center pt-3'>
            <li className='flex flex-row gap-6'>
              <div className='flex flex-row gap-3'>
                <label htmlFor='input-login'>Login</label >
                <input type='text' 
                id='input-login' 
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2'
                {...register('input-login')} required ></input>
              </div>
              <div className='flex flex-row gap-3'>
                <label  htmlFor='input-senha'>Senha</label>
                <input type='password' 
                id='input-senha'
                className='rounded border bg-zinc-800 border-zinc-700 text-white px-2'
                {...register('senha')} required></input>
              </div>
            </li>
        
            <li className='pt-3'> Deseja receber informações sobre os seguintes assuntos abaixo:</li>
    
            <li className='flex flex-wrap gap-4 items-center justify-center' id='assuntos'>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='tecnologia' name='assuntos' value='tecnologia'></input>
                <label htmlFor='tecnologia'>Tecnologia</label>
              </div>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='esportes' name='assuntos' value='esportes'></input>
                <label htmlFor='esportes'>Esportes</label>
              </div>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='automoveis' name='assuntos' value='automoveis'></input>
                <label htmlFor='automoveis'>Automóveis</label>
              </div>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='culinaria' name='assuntos' value='culinaria'></input>
                <label htmlFor='culinaria'>Culinária</label>
              </div>  
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='politica' name='assuntos' value='politica'></input>
                <label htmlFor='politica'>Política</label>
              </div>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='policial' name='assuntos' value='policial'></input>
                <label htmlFor='policial'>Empregos</label>
              </div>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='tempo' name='assuntos' value='tempo'></input>
                <label htmlFor='tempo'>Tempo</label>
              </div>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='cultura' name='assuntos' value='cultura'></input>
                <label htmlFor='cultura'>Cultura</label>
              </div>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='economia' name='assuntos' value='economia'></input>
                <label htmlFor='economia'>Economia</label>
              </div>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='jogos' name='assuntos' value='jogos'></input>
                <label htmlFor='jogos'>Jogos</label>
              </div>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='educacao' name='assuntos' value='educacao'></input>
                <label htmlFor='educacao'>Educação</label>
              </div>
              <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input type='checkbox' id='viagem' name='assuntos' value='viagem'></input>
                <label htmlFor='viagem'>Viagem</label>
              </div>
            </li>

            <li id='termo-uso' className='pt-3'>
                <input type='checkbox' id='confirma_termos' name='assuntos' value='confirma_termos' required></input>
                <label htmlFor='confirma_termos' className='pl-2'>Li as regras de cadastro e autorizo a criação do usuário.</label>
            </li>
            <li className='flex flex-row gap-10 pb-3'>
                <button 
                  type='submit'
                  className='bg-emerald-500 rounded font-semibold text-white w-40'>Confirmar</button>

                <button type='submit'
                className='bg-red-500 rounded font-semibold text-white w-40'>Retornar</button>
            </li>
          </ul>
        </fieldset>
      </form>
      <div>
        {output}
      </div>
    </main>
  )
}
