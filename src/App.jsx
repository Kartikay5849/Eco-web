import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "../src/components/Header"
import Home from './pages/Home'
import Rewards from "./pages/Rewards";
import Aboutus from "./pages/Aboutus";
import Learn from "./pages/Learn";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/rewards" element={<Rewards/>}/>
          <Route path="/learn" element={<Learn/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App