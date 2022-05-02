// import "./style.css";
import Image from "next/image";
import ImgLeft from "/images/banner-img-1.png";
import ImgRight from "/images/banner-img-2.png";
function Main() {
  return (
    <div className="header-main">
      <div className="imgs">
        <Image src={ImgLeft} className="img-left" alt="Img Left" />
        <Image src={ImgRight} className="img-right" alt="Img Right" />
      </div>
      <div className="home-content">
        <h1>order food online in Egypt</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for area, street name, landmark"
          />
          <button>go</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
