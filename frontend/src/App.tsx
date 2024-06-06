import './styles/global-style.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Footer from './components/Footer';
import Header from './components/Header'
import styled from 'styled-components';

function App() {
  return (
    <>
    <BrowserRouter> 
      <AppContainer>
        <Header/>
        <Router/>
        <Footer/>
      </AppContainer>
    </BrowserRouter>        
    </>
  )
}
export default App;

const AppContainer = styled.section`
  height: 100%;
  position: relative;
  padding-bottom: 80px;
`