import './App.css'
import { Navbar } from './components/Navbar'
import '../src/Styles/Global.css'
import { Main } from './components/Main'
import { About } from './components/About'
import ScrollToTopButton from './components/ScrollToTopButton'
import Form from './components/Form'
import Footer from './components/Footer'
function App() {
 
  return (
    <>
       <Navbar/>
       <Main/>
       <Form/>
       <About/>
       <Footer/>
       <ScrollToTopButton/>
    </>
  )
}

export default App
