import './App.css'
import { useState } from 'react';
import { FiSettings } from 'react-icons/fi'; // Ícone de engrenagem
import CampoDePesquisa from './campoDePesquisa'; // import do campo de pesquisa
import CampoDeFoto from './campoDeFoto';
import ListaDeMensagens from './mensagens';

function App() {
  const [mensagem, setMensagem] = useState(''); //contador 
  const [aberto, setAberto] = useState(false); //botao configuração

  const toggleConfig = () => {
    setAberto(!aberto);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/mensagens", {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify({ texto: mensagem, userId: 1 })
      });

      if (!response.ok) throw new Error("Erro ao enviar mensagem");

      const data = await response.json();
      console.log("mensagem criada:", data);
      alert("Mensagem enviada com sucesso!");
      setMensagem(""); // Limpa o campo
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem")
    }
  };

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
     <ListaDeMensagens />
     </>
  );
}

export default App
