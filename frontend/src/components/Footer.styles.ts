
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  flex-shrink: 0;  // Footer가 항상 하단에 고정되도록 함
  background-color: #f6f6f6;
  color: #222;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
`

export const Address = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin-right: 5rem;
   `