import Link from "next/link";
import { useEffect } from "react";
import Image from "../src/Image";
import kpopIMG from "../public/kpop.jpg";

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
      <div className="image-container">
        <Image
          src={kpopIMG}
          alt="Vercel Logo"
          className="img image-container"
          fill
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
        <a href="http://www.freepik.com">Designed by Freepik</a>
      </div>
    </>
  );
};
export default Home;
