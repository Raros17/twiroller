import { HeaderContainer, LoginButton, StyledLink, HeaderList, ThemeBtn } from "./Header.styles";
import { CiDark } from "react-icons/ci";
import { themeState } from "../recoils/atoms/themeAtom";
import { useRecoilState } from "recoil";

function Header() {
  const [theme, setTheme] = useRecoilState(themeState);
  const handleLoginClick = () => {
    window.location.href = "https://twitter.com/oauth/authenticate?oauth_token=tI8ifYsKDIAzyFQUuIVxt2BiJvjgR5";
  };
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <HeaderContainer>
        <HeaderList>
          <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
          <StyledLink to="/">트윗 추출기</StyledLink>
          <StyledLink to="/info">간단 설명서</StyledLink>
        </HeaderList>
        <ThemeBtn onClick={toggleTheme}>
          <CiDark />
        </ThemeBtn>
      </HeaderContainer>
    </>
  );
}
export default Header;
