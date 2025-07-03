import { StrictMode } from 'react' // ajuda a detectar problemas de renderização, avisos...
import { createRoot } from 'react-dom/client'
import './index.css' //importando o css principal. h1, p, a... 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
