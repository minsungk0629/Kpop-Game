import React, { Component } from "react";

class Kakao extends Component {
  componentDidMount() {
    window.Kakao.Link?.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: `${
          typeof window !== "undefined" ? sessionStorage.getItem("score") : 0
        }점 획득!`,
        description: "",
        imageUrl: "https://ifh.cc/g/D8wKsS.jpg",
        link: {
          mobileWebUrl: "https://kpop-game-three.vercel.app/",
          webUrl: "https://kpop-game-three.vercel.app/",
        },
      },
      social: {
        likeCount: 842,
        commentCount: 1803,
        sharedCount: 1236,
      },
      buttons: [
        {
          title: "나도 하러 가기",
          link: {
            mobileWebUrl: "https://kpop-game-three.vercel.app/",
            webUrl: "https://kpop-game-three.vercel.app/",
          },
        },
      ],
    });
  }
  onClickKakao = () => {
    window.open("https://sharer.kakao.com/talk/friends/picker/link");
  };
  render() {
    return (
      <div className="Kakao">
        <button id="kakao-link-btn" onClick={this.onClickKakao}>
          <img
            src={
              "https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
            }
            alt="kakao"
            className="kakaoLogo"
          />
        </button>
      </div>
    );
  }
}

export default Kakao;
