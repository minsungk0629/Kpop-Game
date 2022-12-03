import Link from "next/link";
import { useEffect } from "react";
import Image from "../src/Image";
import kpopIMG from "../public/kpop.jpg";
import mobileImg from "../public/mobileimg.jpeg";
import desktopImg from "../public/desktopimg.jpeg";
import Head from "next/head";

const Home = () => {
  const kakaoKey = "a8fd92480680c38b85ea2759e039e2cb";
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      console.log("kakaoKey= ", kakaoKey);
      window.Kakao.init(kakaoKey);
    }
  }, []);
  return (
    <>
      <Head>
        <title>너 KPOP 좀 아니?</title>
      </Head>
      <div className="image-container">
        <Image
          src={mobileImg}
          alt="mobileImg"
          className="img image-container"
          fill
          id="mImg"
        />
        <Image
          src={desktopImg}
          alt="desktopImg"
          className="img image-container"
          fill
          id="dImg"
        />

        <Link href="/Game">
          <button
            type="button"
            className="btn btn-warning button"
            id="startBtn"
          >
            게임하기
          </button>
        </Link>
        <ins
          className="kakao_ad_area"
          styles="display:none;width:100%;"
          data-ad-unit="DAN-vmRbfJoxeLsw4jE9"
          data-ad-width="320"
          data-ad-height="100"
        ></ins>
      </div>
      <a href="http://www.freepik.com" id="freepik">
        Designed by Freepik
      </a>
    </>
  );
};
export default Home;
