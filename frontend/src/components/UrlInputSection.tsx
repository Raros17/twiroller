import React, { RefObject, KeyboardEvent } from 'react';
import { InputWrap, HyperLinkInput, InputTextDeleteBtn, CrawlingBtn, ErrorMessageSection, InputSection } from './Home.styles';

interface UrlInputSectionProps {
  urlInput: RefObject<HTMLInputElement>;
  clearInputField: () => void;
  handleSubmit: () => void;
  errorMessage: string;
}

const UrlInputSection: React.FC<UrlInputSectionProps> = ({ urlInput, clearInputField, handleSubmit, errorMessage }) => {

    const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            handleSubmit();
        }
    }

  return (
    <InputSection>
      {errorMessage && (
        <ErrorMessageSection>
          <p>{errorMessage}</p>
        </ErrorMessageSection>
      )}
      <InputWrap>
        <HyperLinkInput type="text" ref={urlInput} onKeyDown={handleKeyDown} placeholder='최하단 Tweet URL을 입력하세요.'/>
        <InputTextDeleteBtn onClick={clearInputField}>x</InputTextDeleteBtn>
        <CrawlingBtn onClick={handleSubmit} >추출하기</CrawlingBtn> 
      </InputWrap>
    </InputSection>
  );
};

export default UrlInputSection;
