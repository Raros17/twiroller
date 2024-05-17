import './styles/global-style.css';
import styled from 'styled-components';
import { CiDark } from "react-icons/ci";
import { useState, useRef } from 'react';
import Footer from './components/Footer';

function App() {
  const urlInput = useRef<HTMLInputElement>(null);
  const [fetchedData, setFetchedData ] = useState<{ text: string[], images: string[] }|null>(null)
  const [isLoading, setIsLoading] = useState(false);
  
  async function fetchDataFromUrl(){
  setIsLoading(true);
  const url = 'http://localhost:8080/crawl';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setFetchedData(data.nonLoginAccessData)
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setIsLoading(false);
  }
}

  async function handleFetchUrl(){
        const urlInputData = urlInput.current?.value;
        if(!urlInputData) return;
        setIsLoading(true);

        try {
          const response = await fetch('http://localhost:8080/url', {
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json'
            } , 
            body: JSON.stringify({url: urlInputData})
          })

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log('URL successfully sent to server');        
          await fetchDataFromUrl();
      } catch (error) {
        console.error('Error sending URL data:', error);
      } finally{
        setIsLoading(false)
      }
    }

  return (
    <TopContainer>      
        <Header>
          <HeaderList>
            <li>간단 설명서</li>
            <li>Twiroller에 대하여</li>
          </HeaderList>
          <ThemeBtn><CiDark /></ThemeBtn>
        </Header>
          <TextSection>
            <Title>Twiroller</Title>
            <InfoText>본문을 추출할 트윗 주소를 입력해주세요.</InfoText>
              <TextContainer>
                  <SubmitSection>
                    <HyperLinkInput type='text' ref={urlInput}/>
                    <CrawlingBtn onClick={handleFetchUrl}>추출하기</CrawlingBtn>
                  </SubmitSection>         
                <ContentSection>
                  <ContentContainer>
                  {fetchedData ? (
                <>
                  <div>
                    {fetchedData.text.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                  <div>
                    {fetchedData.images.map((src, index) => (
                      <img key={index} src={src} alt={`tweet-img-${index}`} />
                    ))}
                  </div>
                </>
              ) : (
                '불러올 데이터가 없습니다!'
              )}
                   </ContentContainer> 
                  </ContentSection>
              </TextContainer>
          </TextSection>
          <Footer/>
    </TopContainer>
  );
}
export default App;

const InfoText = styled.h4`
  font-size: 18px;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 600;
`

const TextContainer = styled.div`
  width: 100%;
  position: relative;  
`
const SubmitSection = styled.div`
  display: flex;
  justify-content: center;
`

const TextSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
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

const ThemeBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-top: 5px;;
  position: absolute;
  right: 10px;
  color: #1D9BF0;;
  cursor: pointer;
  font-size: 35px;
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
  position: absolute;
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
  width: 60%;
  background-color: aliceblue;
  padding: 3rem;
  font-size: 18px;
  color: #222;
  font-weight: 500;
  border-radius: 10px;
  line-height: 1.5;
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