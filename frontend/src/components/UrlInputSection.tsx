import React, {RefObject} from 'react';
import { InputWrap, HyperLinkInput, InputTextDeleteBtn, CrawlingBtn } from './Home.styles';


interface UrlInputSectionProps {
    urlInput: RefObject<HTMLInputElement>;
    clearInputField: () => void;
    handleSubmit: () => void;
  }
const UrlInputSection:React.FC<UrlInputSectionProps> = ({ urlInput, clearInputField, handleSubmit }) => (
  <InputWrap>
    <HyperLinkInput type="text" ref={urlInput} />
    <InputTextDeleteBtn onClick={clearInputField}>x</InputTextDeleteBtn>
    <CrawlingBtn onClick={handleSubmit}>추출하기</CrawlingBtn>
  </InputWrap>
);

export default UrlInputSection;
