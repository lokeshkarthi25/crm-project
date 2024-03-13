
import './App.css';
import About from './components/About';
import Customer from './components/Customer';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
// import YourComponent from './components/Popup';
import Product from './components/Product';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      
       <BrowserRouter>
        <Routes>
          <Route  element={<Sidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          </Route>
          
        </Routes>
      </BrowserRouter> 
      </div>
  )
}

export default App;
