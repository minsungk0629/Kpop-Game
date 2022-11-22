import Link from "next/link";
import Image from "next/image";

const StartPage = () => {
  return (
    <>
      <div className="image-container">
        <Image
          src="/../public/kpop.jpg"
          alt="Picture of the author"
          fill
          className="img"
          priority
        />
        <Link href="/Game">
          <button type="button" className="btn btn-warning button">
            게임하기
          </button>
        </Link>
      </div>
    </>
  );
};

export default StartPage;
