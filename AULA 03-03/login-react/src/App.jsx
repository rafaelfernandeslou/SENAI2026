import logo from './assets/img/Sesi-SP.jpg'
import logo1 from './assets/img/SENAI_Sao_Paulo_logo.png'
import './App.css'

function App() {
  return (
    <div className="container">
    <div className="login-box">
    <img src={logo} alt="SESI SENAI" className="logo" />

    <h1>Login</h1>
    <p className="subtitle">Para continuar</p>

    <form>
      <div className="input-group">
        <label>NOME</label>
        <input type="text" placeholder="Seu nome" />
      </div>

      <div className="input-group">
        <label>SENHA</label>
        <input type="password" placeholder="******" />
      </div>

      <button type="submit" className="login-button">Log in</button>
    </form>

    <div className="footer-links">
      <a href="#">Esqueceu a senha?</a>
      <a href="#"><strong>Cadastre-se !</strong></a>
    </div>
  </div>
</div>
)


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
