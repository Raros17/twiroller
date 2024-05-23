import './styles/global-style.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Footer from './components/Footer';
import Header from './components/Header'

function App() {
  return (
    <>
    <BrowserRouter> 
      <Header/>   
      <Router/>
      <Footer/>
    </BrowserRouter>        
    </>
  )
}
export default App;
