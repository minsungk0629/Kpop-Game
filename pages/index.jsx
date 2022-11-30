import StartPage from "../src/startPage";
import { useEffect } from "react";
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
    </>
  );
};
export default Home;
