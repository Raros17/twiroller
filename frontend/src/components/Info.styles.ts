import styled from "styled-components";

export const InfoSection = styled.section`
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  height: 100%;
  color: ${props => props.theme.text};
`;
export const InfoContainer = styled.section`
  width: 50%;
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
`;

export const InfoText = styled.ul`
  font-size: 20px;
  margin: 2rem 0;
  ol {
    margin-top: 10px;
  }
`;
