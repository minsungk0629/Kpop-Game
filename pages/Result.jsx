const Result = () => {
  let score =
    typeof window !== "undefined" ? sessionStorage.getItem("score") : null;
  if (score == null) {
    score = 0;
  }
  return (
    <>
      <div className="resultScore">당신의 점수는 {score}점!</div>
    </>
  );
};

export default Result;
