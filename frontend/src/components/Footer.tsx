import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
        <Address>Contact to. @RR</Address>
        <section></section>
    </FooterContainer>
  )
}
export default Footer;


const FooterContainer = styled.footer`
    background-color: #f6f6f6;
    color: #222;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: end;
`

const Address = styled.p`
  font-size: 15px;
  font-weight: 600;
    margin-right: 5rem;
`
