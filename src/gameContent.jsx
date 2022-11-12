/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Axios from "axios";
import Image from "next/image";
import Link from "next/link";

const GameContent = (props) => {
  const updateScore = () => {
    const nextScore = props.score + 1;
    props.setScore(nextScore);
    const accessToken =
      typeof window !== "undefined"
        ? sessionStorage.setItem("score", nextScore)
        : null;
  };

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function nextStage() {
    const firstNum = rand(0, props.IDList.length);
    let secondNum = rand(0, props.IDList.length);
    while (firstNum == secondNum) {
      secondNum = rand(0, props.IDList.length);
    }
    props.setFirstID(props.IDList[firstNum]);
    props.setSecondID(props.IDList[secondNum]);
  }

  const [videoInfo, setVideoInfo] = useState([]);
  useEffect(() => {
    const IDString = props.firstID + props.secondID;
    const apiKey = "AIzaSyDNikTB4dl2anKMqtQRQCEw9eTjwtAw_j0";
    Axios.get(
      `/api/videos?part=snippet,statistics${IDString}&maxResults=50&key=${apiKey}`
    ).then((res) => {
      setVideoInfo(res.data.items);
    });
  }, [props.firstID, props.secondID, props.score]);
  const firstImg = videoInfo[0]?.snippet.thumbnails.high.url;
  const firstTitle = videoInfo[0]?.snippet.title;
  const firstViewC = Number(videoInfo[0]?.statistics?.viewCount);
  const secondImg = videoInfo[1]?.snippet.thumbnails.high.url;
  const secondTitle = videoInfo[1]?.snippet.title;
  const secondViewC = Number(videoInfo[1]?.statistics?.viewCount);
  console.log(firstImg, firstTitle, firstViewC);
  return (
    <>
      <div className="Container">
        <div className="link" id="fst">
          <Link href={firstViewC < secondViewC ? "/Result" : "/Game"}>
            <div className="background" id="firstMV">
              <div className="overlay">
                <a>
                  <img src={firstImg} className="image" alt="1" />
                  {firstImg && (
                    <Image
                      src={firstImg}
                      alt=""
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      className="image"
                      priority
                      onClick={() => {
                        if (firstViewC >= secondViewC) {
                          props.setScore(props.score + 1);
                          nextStage();
                          updateScore();
                        }
                      }}
                    />
                  )}
                </a>
                <div className="text">{firstTitle}</div>
                <h3 className="text" id="UpViewCount">
                  {firstViewC} 회
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="VS">VS</div>
        <div className="link" id="snd">
          <Link href={firstViewC > secondViewC ? "/Result" : "/Game"}>
            <div className="background" id="secondMV">
              <div className="overlay">
                <a>
                  <img src={secondImg} className="image" alt="2" />
                  {secondImg && (
                    <Image
                      src={secondImg}
                      alt=""
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      className="image"
                      priority
                      onClick={() => {
                        if (firstViewC <= secondViewC) {
                          props.setScore(props.score + 1);
                          nextStage();
                          updateScore();
                        }
                      }}
                    />
                  )}
                </a>

                <div className="text">{secondTitle}</div>
                <h3 className="text" id="DownViewCount">
                  {secondViewC} 회
                </h3>
                <div className="text" id="Score">
                  {props.score}점
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GameContent;
