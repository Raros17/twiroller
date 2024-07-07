import styled from "styled-components";
import { FaX } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

function Modal() {
  return (
    <ModalContainer>
      <ModalSection>
        <ExitBtn>
          <FaX />
        </ExitBtn>
        <DownloadBtn>
          <MdOutlineFileDownload />
        </DownloadBtn>
      </ModalSection>
    </ModalContainer>
  );
}
export default Modal;

const DownloadBtn = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #666;
  color: #fff;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 20px;
  font-size: 30px;
  padding-top: 5px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const ModalSection = styled.div`
  background-color: #fff;
  width: 100%;
  height: 85%;
`;

const ModalContainer = styled.div`
  width: 80%;
  height: 100%;
  background-color: rgba(300, 300, 300, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 10;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;

const ExitBtn = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  border: none;
  font-size: 24px;
  padding-top: 5px;
  text-align: center;
  background-color: #e8e8e8;
  border: 1px solid #ccc;
  cursor: pointer;
  color: #333;
  transition: all 0.2s ease;
  &:hover {
    background-color: #ccc;
  }
`;
