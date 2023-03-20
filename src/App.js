import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Home from './Pages/Home';
import SellCrops from './Pages/SellCrops'
import CreateCrop from './Pages/CreateCrops'
import Insurances from './Pages/Insurance.js'
import CreateInsurance from './Pages/CreateInsurance.js'
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SellCrops" element={<SellCrops />} />
        <Route path="/CreateCrop" element={<CreateCrop  />} />
        <Route path="/Insurances" element={<Insurances />} />
        <Route path="/CreateInsurance" element={<CreateInsurance />} />
      </Routes></Router>
    </div>
  );
}

export default App;
