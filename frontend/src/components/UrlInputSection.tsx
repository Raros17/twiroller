import React, {RefObject} from 'react';
import { InputWrap, HyperLinkInput, InputTextDeleteBtn, CrawlingBtn, ErrorMessageSection, InputSection } from './Home.styles';


interface UrlInputSectionProps {
    urlInput: RefObject<HTMLInputElement>;
    clearInputField: () => void;
    handleSubmit: () => void;
    errorMessage: string; 
  }
  
const UrlInputSection:React.FC<UrlInputSectionProps> = ({ urlInput, clearInputField, handleSubmit, errorMessage }) => (
  <InputSection>
    <ErrorMessageSection>{errorMessage && <p>{errorMessage}</p>} </ErrorMessageSection>
    <InputWrap>
        <HyperLinkInput type="text" ref={urlInput} />
        <InputTextDeleteBtn onClick={clearInputField}>x</InputTextDeleteBtn>
        <CrawlingBtn onClick={handleSubmit}>추출하기</CrawlingBtn>        
    </InputWrap>
  </InputSection>
);

export default UrlInputSection;
