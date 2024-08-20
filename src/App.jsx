import React from 'react';
import "./estilos/style.css"



function App() {
  function FecharModal(){
    console.log("Fechei o botão")
  }
    
  
  return (
    <section>


      <form >
        <fieldset>
        <button className='botão' onClick={FecharModal}>X</button>
          
          <h1>Dados para Cadastro</h1>
          
          <label for="nome">
            Nome:
          </label>
          <input id="nome" type="text"  required />
          <label for="cnpj">
            CNPJ ou CPF:
          </label>
          <input id="cnpj" type="text" required chara />
          <label for="email">
            Email:
          </label>
          <input id="email" type="email" required autoComplete='off' />
          <label for="telefone">
            Telefone:
          </label>
          <input type="phone" name="telefone" id='telefone' required />
          <label For="nome_empresa">
            Nome da Empresa:
          </label>
          <input type="text" name='nome_empresa' id='nome_empresa' />
          <label For="Descrição">
            Descreva sua empresa:
          </label>
          <textarea name="" id="" ></textarea>

        <label For="imagem">
            UrlFoto
        </label>
          <input type="text" />

          <input class="enviar" value="Cadastrar" type="submit" />
        </fieldset>
      </form>
    </section>

  );
}

export default App;
