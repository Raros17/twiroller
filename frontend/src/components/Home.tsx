import {
  TopContainer,
  LoaderContainer,
  TweetImageContainer,
  TweetImage,
  InfoText,
  TextContainer,
  SubmitSection,
  TextSection,
  Title,
  ContentSection,
  ContentContainer,
} from "./Home.styles";
import { useState, useRef, useEffect } from "react";
import "../styles/global-style.css";
import UrlInputSection from "./UrlInputSection";
import Modal from "./Modal";

function Home() {
  const urlInput = useRef<HTMLInputElement>(null);
  const [fetchedData, setFetchedData] = useState<{
    text: string[];
    images: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    console.log(process.env.REACT_APP_TWITTER_CONSUMER_KEY);
  }, []);

  async function fetchCrawledData() {
    setIsLoading(true);
    const url = "http://localhost:8080/crawl";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFetchedData(data.nonLoginAccessData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const clearInputField = () => {
    if (urlInput.current) {
      urlInput.current.value = "";
      setErrorMessage("");
    }
  };

  async function handleSubmit() {
    const urlInputData = urlInput.current?.value;
    if (!urlInputData) {
      setErrorMessage("Url을 입력해주세요!");
      return;
    }

    const urlPattern = /^https:\/\/x\.com\//;
    if (!urlPattern.test(urlInputData)) {
      setErrorMessage("유효한 Url 주소인지 다시 한번 확인해주세요!");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: urlInputData }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("URL successfully sent to server");
      await fetchCrawledData();
    } catch (error) {
      console.error("Error sending URL data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TopContainer>
      <Modal />
      <TextSection>
        <Title>Twiroller</Title>
        <InfoText>본문을 추출할 트윗 주소를 입력해주세요.</InfoText>
        <TextContainer>
          <SubmitSection>
            <UrlInputSection
              urlInput={urlInput}
              clearInputField={clearInputField}
              handleSubmit={handleSubmit}
              errorMessage={errorMessage}
            />
          </SubmitSection>
          <ContentSection>
            <ContentContainer>
              {isLoading ? (
                <LoaderContainer>
                  <div className="loader"></div>
                </LoaderContainer>
              ) : fetchedData ? (
                <>
                  <div>
                    {fetchedData.text.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                  <TweetImageContainer>
                    {fetchedData.images.map((src, index) => (
                      <TweetImage key={index} src={src} alt={`tweet-img-${index}`} />
                    ))}
                  </TweetImageContainer>
                </>
              ) : (
                "불러올 데이터가 없습니다!"
              )}
            </ContentContainer>
          </ContentSection>
        </TextContainer>
      </TextSection>
    </TopContainer>
  );
}
export default Home;
