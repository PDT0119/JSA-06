
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import Trend from './Trend';
import { products } from './mock';
function App() {
  return (
    <div className='App'>
    <Header/>
    <Products productItems = {products} />
    <Trend/>
    <Footer/>
    </div>
  );
}

export default App;
