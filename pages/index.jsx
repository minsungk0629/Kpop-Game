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
    <meta name="naver-site-verification" content="a11fceb1849e9334fdaaf551edafc816cc1f56c2" />
        <meta
          name="naver-site-verification"
          content="1e08c718c78260bbb48647d935c4fc1c72645bd0"
        />
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
      </div>
      <ins
        class="kakao_ad_area"
        id="kakao_ad"
        data-ad-unit="DAN-KMKKOYSr5pMneW8o"
        data-ad-width="320"
        data-ad-height="100"
      ></ins>
      <a href="http://www.freepik.com" id="freepik">
        Designed by Freepik
      </a>
    </>
  );
};
export default Home;
