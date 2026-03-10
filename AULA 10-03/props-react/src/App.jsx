import './App.css'
import Mensagem from './components/mensagem.jsx'
import MeuAvatar from './components/meuAvatar.jsx'
import foto from './assets/img/O-Globo.jpg'


function App() {

  return (
    <>
      {/* 
      <Mensagem 
        titulo='Aprendendo Props ou Properties ou ainda Propiedades' 
        texto='Bem vindo ao mundo das Props' 
        nome='Ratao Gatao'
      />

      <Mensagem 
        titulo='Interclasse 2026' 
        texto='Bem vindo ao Interclasse' 
        nome='Fabio atrasado'
      />
      */}

      

      <MeuAvatar
        foto={foto}
        nome="Rafael Lourenço Fernandes da Silva"
        idade={17}
        estiloMusical="Sertanejo"
        disciplina="Matemática"
/>
    </>
  )
}

export default App