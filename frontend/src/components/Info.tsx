import styled from "styled-components";
function Info() {
    return (
      <InfoSection>
        <InfoContainer>
        <h2>Twiroller 설명서</h2>
          <p>Twiroller은 X(구 twitter)의 게시글을 쉽게 추출하기 위한 도구입니다. <br/>원하는 게시글의 링크를 넣어 텍스트와 이미지를 추출한 뒤, 이를 다양한 용도로 가공하여 사용할 수 있습니다. 일일이 수동으로 긁어 저장할 필요 없는 백업의 편리성을 지향합니다. </p>
          <InfoText>
              <ol>1) 원하는 게시글의 링크를 넣고 '추출하기' 버튼을 누릅니다. 이때, X 비로그인 상태일 시 첫번째 본문의 내용만 접근 가능합니다.</ol>
              <ol>2) 타래에 연결된 게시글들까지 한번에 추출하고 싶은 경우, 로그인 버튼을 눌러 직접 로그인 인증을 한 뒤 다시 링크를 넣어 추출할 수 있습니다. 이때 로그인한 계정으로 접근이 가능 범위의 게시글만 추출이 가능합니다.</ol>
              <ol>3) 저장하기 버튼을 누르면 txt 파일과 image로 내 컴퓨터에 저장하기가 가능합니다.</ol>
          </InfoText>
          <p>
              직접 작성하지 않은 내용을 편집, 게시할 경우 지적 저작권을 고려해주시길 바랍니다.<br/>
              마음껏 다양한 용도로 사용해주세요!🥰
          </p>
        </InfoContainer>
      </InfoSection>
    )
  }
  export default Info;


  const InfoSection = styled.section`
    padding-top: 8rem;
    display: flex;
    justify-content: center;
    height: 100%;
  `
  const InfoContainer = styled.section`
    width: 60%;
    h2 {
        font-size: 30px;
        margin-bottom: 3rem;
        font-weight: 700;
    }
    p {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.5;
    }
  `

  const InfoText = styled.ul`
  font-size: 20px;
  margin: 2rem 0;
    ol {
      margin-top: 10px;
    }
  `