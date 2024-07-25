import styled from "styled-components";
import { HyperLinkInput, CrawlingBtn } from "./Home.styles";

function Login() {
  const handleTwitterLogin = () => {
    // 트위터 로그인을 시도하는 로직 추가
    // 예: window.location.href = '/twitter-login';
  };

  return (
    <LoginContainer>
      <LoginSection>
        <LoginTitle>X(Twitter)로 로그인 하기</LoginTitle>
        <LoginInput placeholder="트위터 아이디를 입력하세요." />
        <LoginInput placeholder="트위터 비밀번호를 입력하세요." />
        <LoginBtn>로그인</LoginBtn>
      </LoginSection>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: ${props => props.theme.background};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSection = styled.section`
  margin-top: 3rem;
  min-width: 400px;
  width: 40%;
  height: 50%;
  background-color: ${props => props.theme.modalBack};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const LoginTitle = styled.h2`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
`;

const LoginBtn = styled(CrawlingBtn)`
  width: 200px;
`;

const LoginInput = styled(HyperLinkInput)`
  width: 60%;
  margin-bottom: 1rem;
`;
