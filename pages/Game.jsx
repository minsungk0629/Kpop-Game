import Link from "next/link";
import GameContent from "../src/gameContent";
import { useEffect, useState } from "react";

const Game = (props) => {
  const [score, setScore] = useState(0);
  const [firstID, setFirstID] = useState(props.videoID[0]);
  const [secondID, setSecondID] = useState(props.videoID[1]);
  const [stage, setStage] = useState(1);
  return (
    <GameContent
      IDList={props.videoID}
      firstID={firstID}
      secondID={secondID}
      score={score}
      stage={stage}
      setScore={setScore}
      setFirstID={setFirstID}
      setSecondID={setSecondID}
      setStage={setStage}
    />
  );
};
export async function getStaticProps() {
  const videoID = [];
  function getVideoId(posts) {
    posts.items.map((x) => {
      return videoID.push("&id=" + x.snippet.resourceId?.videoId);
    });
  }
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const playlistID = "PLODMrfwE__J41rFco3nOsCRZm62qETZ_O";
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistID}&maxResults=30&key=AIzaSyDNikTB4dl2anKMqtQRQCEw9eTjwtAw_j0`
  );
  const posts = await res.json();
  getVideoId(posts);
  return {
    props: {
      posts,
      videoID,
    },
  };
}

export default Game;
