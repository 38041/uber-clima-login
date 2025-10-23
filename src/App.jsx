import { useState } from 'react'
import './App.css'
import { CloudDrizzle } from 'lucide-react';

function App() {
  const [cidade, setCidade] = useState('');
  const [clima, setClima] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');


  return (
    <>
      <div className="app-container">
        <div className="content-wrapper">
<header>
  <h1>

    Login
    </h1>
  
</header>
<div className="busca-box">
<p>Usuário:</p>
  <div className="busca-container"></div>
  <input type="text" placeholder="Digite o nome da Cidade.." />
  <p>Senha:</p>
  <input type="text" placeholder="Digite o nome da Cidade.." />
   <p><button>Entrar</button></p>
  </div>
  <div class="bt-login" id="bt-facebook"></div>
  <div class="bt-login" id="bt-Twitter"></div>
  
        </div>
      </div>
    </>
  )
}

export default App
