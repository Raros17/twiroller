import styled from "styled-components";
export const Image = styled.img`
  width: auto;
  max-width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
`;

export const DownloadBtn = styled.button`
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

export const ModalSection = styled.div`
  background-color: #fff;
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 80%;
  height: 100vh;
  background-color: rgba(300, 300, 300, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 10%;
  z-index: 10;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;

export const ExitBtn = styled.button`
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
