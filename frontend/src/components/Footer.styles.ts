import styled from "styled-components";

export const FooterContainer = styled.footer`
  flex-shrink: 0;
  background-color: ${props => props.theme.footerBack};
  color: ${props => props.theme.text};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Address = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin-right: 5rem;
`;
