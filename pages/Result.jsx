const Result = () => {
  let score =
    typeof window !== "undefined" ? sessionStorage.getItem("score") : null;
  if (score == null) {
    score = 0;
  }
  return <>{score}</>;
};

export default Result;
