import './styles/global-style.css';
import styled from 'styled-components';
import fetchData from './components/fetchData';
import { CiDark } from "react-icons/ci";
import { useState, useRef } from 'react';
import Footer from './components/Footer';

function App() {
  const urlInput = useRef<HTMLInputElement>(null);
  const [fetchUrl, setFetchUrl]= useState('');

  //console.log(fetchUrl)
  //후에 이 url을 fetchData 쪽으로 보내서 검색하게 시킴.

  function handleFetchUrl(){
    //나중에 띄어쓰기 없애는 로직 짜기
    if (urlInput.current) {
      setFetchUrl(urlInput.current.value); 
    }
    }

  fetchData();
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
                  <ContentContainer>밤은 어둠의 망토를 덮으며 도시를 조용히 삼켰다. 높은 빌딩들 사이로 희미한 빛이 반짝였지만, 그 아래의 거리들은 고요했다. 이곳은 잃어버린 꿈들이 떠도는 곳, 인간의 희망이 밤의 그림자 속에서 힘을 잃는 곳이었다.

제이크는 그런 도시의 어두운 구석에 자리 잡고 있었다. 그는 여느 때와 마찬가지로 지하 주차장의 벽에 기대어 앉아, 낡은 카세트 플레이어에서 흐르는 재즈 음악을 들었다. 그의 손에는 오래된 사진 한 장이 쥐어져 있었다. 사진 속의 여인은 미소를 짓고 있었지만, 제이크는 그 미소 뒤에 감춰진 슬픔을 알고 있었다. 그녀는 그의 삶에 있어서 유일한 빛이었지만, 그 빛은 오래 전에 사라져버렸다.

그는 한숨을 쉬며, 담배를 입에 물었다. 이 도시에서 살아남기 위해서는 강해져야 했다. 그러나 그는 이미 너무 많은 것을 잃었고, 그 잃어버린 것들이 그의 어깨를 무겁게 짓누르고 있었다. 이제 그에게 남은 것은 복수뿐이었다.

제이크는 담배를 태우며, 먼 곳을 바라보았다. 도시의 불빛이 흐리게 일렁이는 동안, 그는 결심했다. 이 밤이 끝나기 전에, 그는 그를 아프게 만든 이들에게 자신의 결심을 알릴 것이다. 그리고 그들이 그의 고통을 알게 되면, 도시는 다시는 예전으로 돌아갈 수 없을 것이다.</ContentContainer>
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