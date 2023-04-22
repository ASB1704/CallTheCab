import './App.css'
import { Navbar } from './components/Navbar'
import '../src/Styles/Global.css'
import { Main } from './components/Main'
import { About } from './components/About'
function App() {

  return (
    <>
       <Navbar/>
       <Main/>
       <About/>
    </>
  )
}

export default App
