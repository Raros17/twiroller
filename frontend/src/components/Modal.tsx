import styled from "styled-components";
import { FaX } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalState, modalImageState } from "../recoils/atoms/modalsAtom";
import { Overlay, DownloadBtn, ModalSection, Image, ModalContainer, ExitBtn } from "./Modal.styles";

function Modal() {
  const setModalOpen = useSetRecoilState(modalState);
  const [modalImage, setModalImage] = useRecoilState(modalImageState);

  const handleModalClose = () => {
    setModalOpen(false);
    setModalImage("");
  };

  const handleDownloadImg = (imageUrl: string) => {
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "downloaded_image.jpg";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert("Failed to download image"));
  };

  return (
    <>
      <Overlay onClick={handleModalClose} />
      <ModalContainer>
        <ModalSection>
          <ExitBtn onClick={handleModalClose}>
            <FaX />
          </ExitBtn>
          <DownloadBtn
            onClick={() => {
              handleDownloadImg(modalImage);
            }}>
            <MdOutlineFileDownload />
          </DownloadBtn>
          {modalImage && <Image src={modalImage} alt="Modal Image" />}
        </ModalSection>
      </ModalContainer>
    </>
  );
}
export default Modal;
