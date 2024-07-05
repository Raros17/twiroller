import styled from "styled-components";

function Modal() {
  return (
    <ModalContainer>
      <div></div>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 80%;
  height: 100%;
  background-color: rgba(300, 300, 300, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 10;
  border-radius: 30px;
`;
export default Modal;
