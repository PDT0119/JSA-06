import './Header.css'
import './App.css';
import Header from './Header';
import Navigation from './Nativigation';
import Content from './Content';
import Footer from './Footer';
import Ind from './Ind';
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className='mid'>
      <Ind />
      <Content />
      </div>
    
      <Footer />
    </div>
  );
}

export default App;
