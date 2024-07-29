import { useState } from "react";
import styled from "styled-components";
import { HyperLinkInput, CrawlingBtn } from "./Home.styles";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  async function handleTwitterLogin() {
    try {
      const response = await fetch("http://localhost:8080/twitter-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // if (response.ok) {
      //   const data = await response.json();
      //   sessionStorage.setItem("twitterLoginData", JSON.stringify(data));
      //   setLoginSuccess(true);
      //   alert("로그인에 성공하였습니다! 이제 원하는 트윗을 추출해주세요:)");
      // } else {
      //   alert("로그인에 실패하였습니다. 다시 시도해주세요.");
      // }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }
  const isButtonDisabled = !username || !password;

  return (
    <LoginContainer>
      <LoginSection>
        <LoginTitle>X(Twitter)로 로그인 하기</LoginTitle>
        <LoginInput
          type="text"
          placeholder="트위터 아이디를 입력하세요."
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="트위터 비밀번호를 입력하세요."
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <LoginBtn onClick={handleTwitterLogin} disabled={isButtonDisabled}>
          로그인
        </LoginBtn>
        {loginSuccess && <SuccessMessage>로그인에 성공했습니다!</SuccessMessage>}
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
  background-color: ${props => props.theme.body};
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
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const LoginInput = styled(HyperLinkInput)`
  width: 60%;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: 1rem;
`;
