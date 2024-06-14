import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
function Home() {
    const urlInput = useRef<HTMLInputElement>(null);
    const [fetchedData, setFetchedData ] = useState<{ text: string[], images: string[] }|null>(null)
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      console.log(process.env.REACT_APP_TWITTER_CONSUMER_KEY);
  }, []);
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

  const clearInputField = () =>{
    if (urlInput.current) {
      urlInput.current.value = '';
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
            <TextSection>
              <Title>Twiroller</Title>
              <InfoText>본문을 추출할 트윗 주소를 입력해주세요.</InfoText>
                <TextContainer>
                    <SubmitSection>
                      <InputWrap>
                        <HyperLinkInput type='text' ref={urlInput}/>
                        <InputTextDeleteBtn onClick={clearInputField}>x</InputTextDeleteBtn>
                      </InputWrap>
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
                      <TweetImageContainer>
                      {fetchedData.images.map((src, index) => (                      
                          <TweetImage key={index} src={src} alt={`tweet-img-${index}`} />
                          ))}
                      </TweetImageContainer>
                  </>
                ) : (
                  '불러올 데이터가 없습니다!'
                )}
                     </ContentContainer> 
                    </ContentSection>
                </TextContainer>
            </TextSection>
      </TopContainer>
    );
  }
  export default Home;

  const InputWrap = styled.div`
    position: relative;
    height: 50px;
    width: 50%;
    display: flex;
    align-items: center;
  `

  const InputTextDeleteBtn = styled.button`
    border-radius: 50%;
    width: 28px;
    height: 28px;
    position: absolute;
    right: 30px;
    background-color: #e8e8e8;
    border: 1px solid #ccc;
    cursor: pointer;
  `
  const TweetImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
  `
  
  const TweetImage = styled.img`
    border-radius: 30px;
    width: 250px;
    height: 350px;
  `
  
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
    height: 100%;
    position: relative;
    `
  
  
  const Title = styled.h1`
    font-size: 35px;
    font-weight: 800;
    margin: 2rem;
    color: #222;
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
    width: 100%;
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