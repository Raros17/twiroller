import "./styles/global-style.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <AppContainer>
          <MainContent>
            <Router />
          </MainContent>
        </AppContainer>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default App;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: -40px;
`;

const MainContent = styled.main`
  flex: 1 0 auto;
  overflow-y: auto;
`;
