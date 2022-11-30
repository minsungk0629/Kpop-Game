import { useEffect, useState } from "react";
import Link from "next/link";
import Kakao from "../src/kakao";

const Result = () => {
  const kakaoKey = "db38d8749dd506387432d526a93edf4a";
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      console.log("kakaoKey= ", kakaoKey);
      window.Kakao.init(kakaoKey);
    }
  }, []);
  let score =
    typeof window !== "undefined" ? sessionStorage.getItem("score") : null;
  if (score == null) {
    score = 0;
  }
  return (
    <div className="resultContainer">
      <div className="resultScore" style={{ maxWidth: "750px" }}>
        <div id="ResultText">
          {score == 10
            ? `당신은 진정한 KPOP고인물!`
            : score >= 8
            ? "KPOP에 진심인 당신!"
            : score >= 6
            ? "KPOP 좀 아시는 군요!"
            : "한번 더 도전해보세요!"}
        </div>
        <span id="ScoreText">{score}</span>
        <span id="Wja">점</span>
        <Link href="/">
          <button
            type="button"
            className="btn btn-warning button"
            id="resultBtn"
          >
            다시하기
          </button>
        </Link>
        <Kakao props={score} />
      </div>
    </div>
  );
};

export default Result;
