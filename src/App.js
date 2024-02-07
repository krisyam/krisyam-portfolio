import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/router';
import { FooterComponent } from './components/FooterComponent';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className='content'>
            <MainRouter/>
        </div>
        <ReturnToTop/>
        <FooterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;



function ReturnToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='returnToTop'>
      <button onClick={() => handleScrollToTop()}>Return to top</button>
    </div>
  );
}
  