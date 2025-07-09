import './App.css'
import { useState } from 'react';
import { FiSettings } from 'react-icons/fi'; // Ícone de engrenagem
import CampoDePesquisa from './campoDePesquisa'; // import do campo de pesquisa
import CampoDeFoto from './campoDeFoto';

function App() {
  const [mensagem, setMensagem] = useState(''); //contador 
  const [aberto, setAberto] = useState(false); //botao configuração

  const toggleConfig = () => {
    setAberto(!aberto);
  }


  const handleSubmit = (e) => {
    e.preventDefault();//impede o envio padrao
    console.log("Enviando mensagem:", mensagem);
    //aqui eu chamo minha API

  }

  return (
    <>
    <header className="main-header">
      <div className='logo-header'>
        <h1>MyPlace</h1>
      </div> 

      <CampoDePesquisa />

     <button onClick={toggleConfig} className="btn-config">
      <FiSettings className="icone" />
     </button>

     {aberto && (
      <>
        <div className="overlay" onClick={() => setAberto(false)}></div>
        <div className="menu-config">
          <p>Perfil</p>
          <p>login</p>
          <p>Logout</p>
        </div>
      </>
     )}
     </header>
     <div className="bloco-foto">
        <CampoDeFoto src="/exemploPerfil.png" /> 
      </div>
     
     <form onSubmit={handleSubmit} className="campoDeMsg">
    
      <textarea
        maxLength={280} 
        value={mensagem}
        onChange={(e)=> setMensagem(e.target.value)}
        placeholder="Digite sua mensagem..."
        className="textarea"
      />
      <div className="contador">{mensagem.length}/280</div>
      <button type="submit">Enviar</button>
     </form>
     </>
  );
}

export default App
