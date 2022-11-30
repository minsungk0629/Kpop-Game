import Link from "next/link";
import Image from "next/image";
import kpopIMG from "../public/kpop.jpg";

const StartPage = () => {
  return (
    <>
      <div className="image-container">
        <Image
          src={kpopIMG}
          alt="Picture of the author"
          fill
          className="img"
          priority
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
    </>
  );
};

export default StartPage;
