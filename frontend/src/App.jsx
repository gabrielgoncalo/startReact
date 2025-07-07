import './App.css'
import { useState } from 'react';

function App() {
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();//impede o envio padrao
    console.log("Enviando mensagem:", mensagem);
    //aqui eu chamo minha API

  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <textarea
        maxLength={280} 
        value={mensagem}
        onChange={(e)=> setMensagem(e.target.value)}
        placeholder="Digite sua mensagem..."
        className="campoDeMsg"
      />
      <div className="contador">{mensagem.length}</div>
      <button type="submit">Enviar</button>
     </form> 
  );
}

export default App
