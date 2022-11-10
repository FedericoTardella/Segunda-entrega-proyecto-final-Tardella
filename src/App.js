import './App.css';
import BodyPrincipal from './components/BodyPrincipal';
import Footer from './components/Footer';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element = {<ItemListContainer/>} />
        <Route path="/BodyPrincipal" element = {<BodyPrincipal />} />
        <Route path="/ItemCount" element = {<ItemCount />} />
        <Route path="/ItemDetail" element = {<ItemDetail />} />
      </Routes>
        <Footer />
    </BrowserRouter>
    );
}

export default App;
