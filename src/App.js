
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Privacypolicy from './Components/Privacypolicy';
import { Route, Routes} from "react-router-dom";
import Sign from './Components/Sign';
// import Nav from './Components/Nav';

function App() {
  return (
    <div>
    <Nav/>
    <Routes>

      <Route index element={<Home/>}></Route>
      <Route path="/home"  element={<Home/> }/>
      <Route path="/about" element={<About/>} />
      <Route path="/privacypolicy" element={<Privacypolicy/>} />
      {/* <Route path="/sign" element={<Sign/>} /> */}

       
   </Routes>
   <Footer/>
   </div>
   
  );
}

export default App;
