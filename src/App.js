import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Outcome from './components/outcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// outcome
// Home
// home


function App() {
  return (
    
  
    
    
   
    <Router><>
      <Navbar/>
      <Routes>
        <Route path="/outcome" element={<Outcome/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes></>
    </Router>

    
   
   
  );
}

export default App;
