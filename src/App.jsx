import './App.css'
import Banner from './Components/Banner/Banner'
import Courses from './Components/Counses/Courses'
import LIveAiChat from './Components/LIveAiChat/LIveAiChat'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <LIveAiChat></LIveAiChat>
     <Courses></Courses>
    </>
  )
}

export default App
