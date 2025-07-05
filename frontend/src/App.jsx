import './App.css'

function App() {
  return (
    <div>
    <header className="main-header">
      <h1>MyPlace</h1>
    </header>
      <form className="campoDeMsg" action="/enviar" method="post">
        <input type="text" id="mensagem" name="mensagem" placeholder="Digite sua mensagem" /><br />
        <button type="submit">Enviar</button>
      </form>
      </div>
  )
}

export default App
