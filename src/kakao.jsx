import React, { Component } from "react";

class Kakao extends Component {
  componentDidMount() {
    //window.Kakao.init("db38d8749dd506387432d526a93edf4a");
    window.Kakao.Link?.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: `${
          typeof window !== "undefined" ? sessionStorage.getItem("score") : 0
        }점 획득!`,
        description: "",
        imageUrl: "https://ifh.cc/g/8K2JlX.jpg",
        link: {
          mobileWebUrl: "https://cheonmro.github.io/",
          webUrl: "https://cheonmro.github.io/",
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
            mobileWebUrl: "http://localhost:3000",
            webUrl: "http://localhost:3000",
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
