import './styles/global-style.css';
import styled from 'styled-components';

function App() {
  return (
    <TopContainer>      
        <Header>
          <HeaderList>
            <li>어떻게 사용하나요?</li>
            <li>Twiroller에 대하여</li>
          </HeaderList>
          <ChangeBtn>야간모드</ChangeBtn>
        </Header>
          <Title>Twiroller</Title>
          <section>
            <HyperLinkArea/>
            <CrawlingBtn>가져오기</CrawlingBtn>
            <ContentSection>
              <ContentContainer>랄랄라</ContentContainer>
            </ContentSection>
          </section>
    </TopContainer>
  );
}
export default App;

const TopContainer = styled.section`
  background-color: aqua;
  width: 100%;
  height: 100vh;
`


const Title = styled.h1`
  font-size: 35px;
  font-weight: 800;
  margin: 2rem;
`

const ChangeBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 0;
`

const Header = styled.header`
  width: 100%;
  background-color: #2da4ff;
  height: 60px;
  text-align: center;
  display: flex;
  justify-content: center;
  color: #e4f2ff;
`
const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 60px;    
  li {
    font-weight: 600;
    font-size: 23px;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover {
    color: #ffffff;
  }
  }
`

const ContentSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

const ContentContainer = styled.div`
  width: 80%;
  background-color: aliceblue;
  padding: 3rem;
`

const HyperLinkArea = styled.input`
  width: 50%;
  height: 25px;
  border-radius: 10px;
  margin-right: 1rem;
  outline: none;
  font-size: 17px;
  font-family: inherit;
  padding: 5px 10px;
`
const CrawlingBtn = styled.button`
  width: 100px;
  height: 40px;
  font-size: 17px;
  border-radius: 20px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  background-color: #2da4ff;
  transition: all 0.2s ease;
  color: #fff;
  &:hover{
    background-color: #76adff;
  }
`