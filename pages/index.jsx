import StartPage from "../src/startPage";
import { useEffect } from "react";
import Image from "../src/Image";
import kpopIMG from "../public/kpop.jpg";

const Home = () => {
  const kakaoKey = "db38d8749dd506387432d526a93edf4a";
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      console.log("kakaoKey= ", kakaoKey);
      window.Kakao.init(kakaoKey);
    }
  }, []);
  return (
    <>
      <StartPage />
      <Image src={kpopIMG} alt="Vercel Logo" width={72} height={16} />
    </>
  );
};
export default Home;
