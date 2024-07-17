import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const InputWrap = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const InputTextDeleteBtn = styled.button`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  position: absolute;
  right: 120px;
  background-color: #e8e8e8;
  border: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
    transition: all 0.1s ease;
  }
`;

export const TweetImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2rem 0;
  gap: 1rem;
`;

export const TweetImage = styled.img`
  border-radius: 30px;
  max-width: 23%;
  max-height: 100%;
  cursor: pointer;
`;

export const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ErrorMessageSection = styled.div`
  color: #d32f2f;
  font-size: 14px;
`;

export const InfoText = styled.h4`
  font-size: 18px;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 600;
`;

export const TextContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const SubmitSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const TopContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 800;
  margin: 2rem;
  color: #222;
`;

export const ContentSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const ContentContainer = styled.div`
  width: 60%;
  background-color: aliceblue;
  padding: 3rem;
  font-size: 18px;
  color: #222;
  font-weight: 500;
  border-radius: 10px;
  line-height: 1.5;
`;

export const HyperLinkInput = styled.input`
  width: 100%;
  height: 25px;
  border-radius: 10px;
  margin-right: 1rem;
  outline: none;
  border: 1px solid #888;
  font-size: 17px;
  font-family: inherit;
  padding: 5px 10px;
  &:focus {
    border: 1px solid #1d9bf0;
  }
`;
export const CrawlingBtn = styled.button`
  min-width: 100px;
  height: 40px;
  font-size: 17px;
  border-radius: 20px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: #1d9bf0;
  transition: all 0.2s ease;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #4089f7;
  }
`;
