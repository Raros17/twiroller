import styled from 'styled-components';
import { CiDark } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Header() {
    const handleLoginClick = () => {
        window.location.href = 'https://twitter.com/oauth/authenticate?oauth_token=BcSGRwAAAAAACD4BAAABj6XSd5k';
    };
    return (
      <>
      <HeaderContainer>
              <HeaderList>
                <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
                <StyledLink to ='/'>트윗 추출기</StyledLink>
                <StyledLink to='/info'>간단 설명서</StyledLink>
              </HeaderList>
              <ThemeBtn><CiDark /></ThemeBtn>
      </HeaderContainer>
      </>
    )
  }
  export default Header;
  
const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 23px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;color: #e4f2ff;
  text-decoration: none;
  &:hover {
  color: #ffffff;
}
`

const LoginButton = styled.button`
background-color: aliceblue;
color: #888;
cursor: pointer;
border-radius: 20px;
width: 120px;
height: 40px;
position: absolute;
left: 1rem;
top: 0.5rem;
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

const HeaderContainer = styled.header`
width: 100%;
background-color: #1D9BF0;
height: 60px;
text-align: center;
display: flex;
justify-content: center;
color: #e4f2ff;
position: absolute;
z-index: 2;
`
const HeaderList = styled.ul`
display: flex;
justify-content: space-between;
width: 50%;
height: 60px;   
`