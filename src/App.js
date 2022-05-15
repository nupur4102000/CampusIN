import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Tmp from "./components/Tmp"
import Header from "./components/Header"
//import Login from "./components/Login"
function App() {
  return (
    <div className="App">
      
           
       <Router>
        <Routes>
          <Route path="/" element={<Tmp/>}/>
          <Route path="/home" element={<Header/> }/>
            
          
          
            
          
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
