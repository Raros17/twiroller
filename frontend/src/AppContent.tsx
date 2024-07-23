import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { lightTheme, darkTheme } from "./styles/theme";
import { themeState } from "./recoils/atoms/themeAtom";
import Router from "./routes/Router";
import Footer from "./components/Footer";
import Header from "./components/Header";

function AppContent() {
  const theme = useRecoilValue(themeState);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header />
        <AppContainer>
          <MainContent>
            <Router />
          </MainContent>
        </AppContainer>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppContent;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: -40px;
`;

const MainContent = styled.main`
  flex: 1 0 auto;
  overflow-y: auto;
  background-color: ${props => props.theme.background};
`;
