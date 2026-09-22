import{ useState } from 'react'
import './css/App.css'

function App() {
  const [visible, modalVisible] = useState("false")

  return (
    <>
    <main className='container'>
      <h1 className='titulo'>
        Administrador de Citas Veterinario <span className='titulo-bold'>Veterinario</span>
      </h1>
      <p>{visible}</p>
      <button
      type='button'
      className='btn-nueva-cita'
      onClick={() => modalVisible("true")}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>
    </main>
    </>
  )
}

export default App