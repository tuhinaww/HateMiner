import Home from "./pages/home"
import Demo from "./pages/Demo"
import Profiles from "./pages/Profiles"
import Navbar from "./components/navbar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/profiles" element={<Profiles/>}/>
    </Routes>
    </>
  )
}

export default App
