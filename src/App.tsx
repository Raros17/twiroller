import './styles/global-style.css';
import styled from 'styled-components';
import fetchData from './components/fetchData';

function App() {
  fetchData();
  return (
    <TopContainer>      
        <Header>
          <HeaderList>
            <li>간단 설명서</li>
            <li>Twiroller에 대하여</li>
          </HeaderList>
          <ChangeBtn>야간모드</ChangeBtn>
        </Header>
          <TextSection>
            <Title>Twiroller</Title>
              <TextContainer>
                  <SubmitSection>
                    <HyperLinkInput/>
                    <CrawlingBtn>가져오기</CrawlingBtn>
                  </SubmitSection>         
                <ContentSection>
                  <ContentContainer>여기에 내용이 오게 됩니다.</ContentContainer>
                </ContentSection>
              </TextContainer>
          </TextSection>
    </TopContainer>
  );
}
export default App;

const TextContainer = styled.div`
  width: 100%;
`
const SubmitSection = styled.div`
  display: flex;
  justify-content: center;
`

const TextSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TopContainer = styled.section`
  width: 100%;
  height: 100vh;
  `


const Title = styled.h1`
  font-size: 35px;
  font-weight: 800;
  margin: 2rem;
  color: #222;
`

const ChangeBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 5px;;
  position: absolute;
  right: 10px;
  cursor: pointer;
  background-color: #fff;
  &:hover{
    background-color: #eeeeee;
  }
`

const Header = styled.header`
  width: 100%;
  background-color: #1D9BF0;
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

const HyperLinkInput = styled.input`
  width: 50%;
  height: 25px;
  border-radius: 10px;
  margin-right: 1rem;
  outline: none;
  border: 1px solid #1D9BF0;
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
  border: none;
  background-color: #1D9BF0;
  transition: all 0.2s ease;
  color: #fff;
  cursor: pointer;
  &:hover{
    background-color: #4089f7;;
  }
`