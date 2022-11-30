/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Axios from "axios";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

const GameContent = (props) => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [visible, setVisible] = useState(false);
  const [secondV, setSecondV] = useState(false);
  let v = false;
  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

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
    setVisible(false);
    v = false;
    const firstNum = rand(0, props.IDList.length);
    let secondNum = rand(0, props.IDList.length);
    while (firstNum == secondNum) {
      secondNum = rand(0, props.IDList.length);
    }
    props.setFirstID(props.IDList[firstNum]);
    props.setSecondID(props.IDList[secondNum]);
  }

  useEffect(() => {
    const IDString = props.firstID + props.secondID;
    const apiKey = "AIzaSyDNikTB4dl2anKMqtQRQCEw9eTjwtAw_j0";
    Axios.get(
      `/api/videos?part=snippet,statistics${IDString}&maxResults=50&key=${apiKey}`
    ).then((res) => {
      setVideoInfo(res.data.items);
    });
  }, [props.firstID, props.secondID]);
  const firstImg = videoInfo[0]?.snippet.thumbnails.high.url;
  const firstTitle = videoInfo[0]?.snippet.title;
  const firstViewC = Number(videoInfo[0]?.statistics?.viewCount);
  const secondImg = videoInfo[1]?.snippet.thumbnails.high.url;
  const secondTitle = videoInfo[1]?.snippet.title;
  const secondViewC = Number(videoInfo[1]?.statistics?.viewCount);
  return (
    <>
      <div className="Container">
        <div className="link" id="fst">
          <Link href={props.stage >= 10 ? "/Result" : "/Game"}>
            <div className="background" id="firstMV">
              <div className="overlay">
                <a>
                  {/* <img src={firstImg} className="image" alt="1" /> */}
                  {firstImg && (
                    <Image
                      src={firstImg}
                      alt=""
                      fill
                      className="image"
                      priority
                      onClick={() => {
                        v = true;
                        if (v && !visible && !secondV) {
                          setVisible(true);
                          v = false;
                          if (firstViewC >= secondViewC) {
                            props.setScore(props.score + 1);
                            updateScore();
                          }
                        }
                        if (visible && !secondV) {
                          setVisible(false);
                          setSecondV(true);
                        } else if (!visible && secondV) {
                          setSecondV(false);
                          nextStage();
                          props.setStage(props.stage + 1);
                        }
                      }}
                    />
                  )}
                </a>
                <div className="text" id="Title">
                  {firstTitle}
                </div>
                {visible && (
                  <h3 className="text" id="UpViewCount">
                    <CountUp
                      className="countUP"
                      end={firstViewC}
                      style={{ fontSize: "3vh" }}
                    />{" "}
                    회
                  </h3>
                )}
                {secondV && (
                  <h3 className="text" id="DownViewCount">
                    <div className="countUP" style={{ fontSize: "3vh" }}>
                      {firstViewC} 회
                    </div>
                  </h3>
                )}
              </div>
            </div>
          </Link>
        </div>
        <div className="VS">VS</div>
        <div className="link" id="snd">
          <Link href={props.stage >= 10 ? "/Result" : "/Game"}>
            <div className="background" id="secondMV">
              <div className="overlay">
                <a>
                  {/* <img src={secondImg} className="image" alt="2" /> */}
                  {secondImg && (
                    <Image
                      src={secondImg}
                      alt=""
                      fill
                      className="image"
                      priority
                      onClick={() => {
                        v = true;
                        if (v && !visible && !secondV) {
                          setVisible(true);
                          v = false;
                          if (firstViewC <= secondViewC) {
                            props.setScore(props.score + 1);
                            updateScore();
                          }
                        }
                        if (visible && !secondV) {
                          setVisible(false);
                          setSecondV(true);
                        } else if (!visible && secondV) {
                          setSecondV(false);
                          nextStage();
                          props.setStage(props.stage + 1);
                        }
                      }}
                    />
                  )}
                </a>

                <div className="text" id="Title">
                  {secondTitle}
                </div>
                {visible && (
                  <h3 className="text" id="DownViewCount">
                    <CountUp
                      className="countUP"
                      end={secondViewC}
                      style={{ fontSize: "3vh" }}
                    />{" "}
                    회
                  </h3>
                )}
                {secondV && (
                  <h3 className="text" id="DownViewCount">
                    <div className="countUP" style={{ fontSize: "3vh" }}>
                      {secondViewC} 회
                    </div>
                  </h3>
                )}
                <div className="text" id="Score">
                  {props.score}점
                </div>
                <div className="text" id="Stage">
                  {props.stage}/10
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
