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
      <meta name="naver-site-verification" content="f89315ca8a795b73bd0bd77f938a2c5cdcd47baf" />
        <title>너 KPOP 좀 아니?</title>
      <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5K49WYZZEW">
        </script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5K49WYZZEW');
        </script>
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
