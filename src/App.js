import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/LandingPage';
import ListOrder from './pages/ListOrder';
import DetailProduct from './pages/detailProduct';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<ListOrder />} />
        <Route path="/detail" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
};

export default App;