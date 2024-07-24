import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 23px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  color: #e4f2ff;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
`;

export const LoginButton = styled.button`
  background-color: aliceblue;
  color: #888;
  cursor: pointer;
  border-radius: 20px;
  width: 120px;
  height: 40px;
  position: absolute;
  left: 1rem;
  top: 0.5rem;
`;

export const ThemeBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-top: 5px;
  position: absolute;
  right: 10px;
  color: #1d9bf0;
  cursor: pointer;
  font-size: 35px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #eeeeee;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #1d9bf0;
  height: 60px;
  text-align: center;
  display: flex;
  justify-content: center;
  color: #e4f2ff;
  position: absolute;
  z-index: 2;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 60px;
`;
