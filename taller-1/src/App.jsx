import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RegistrarLectura from './pages/RegistrarLectura'
import MedicionesExistentes from './pages/MedicionesExistentes'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className="mb-3">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrar" element={<RegistrarLectura />} />
        <Route path="/mediciones" element={<MedicionesExistentes />} />
      </Routes>
    </>
  )

}



export default App
