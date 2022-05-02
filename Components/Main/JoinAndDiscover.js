import Link from "next/link";
import Image from "next/image";
import Appstore from "/images/logo_appstore.svg";
import PalyStore from "/images/logo_playstore.svg";
import HuaweiStore from "/images/logo_huaweistore1.svg";
import ImgView from "/images/app-view.png";

export default function JoinAndDiscover() {
  return (
    <div className="container">
      <div className="join">
        <h1>Join us</h1>
        <p>be a part of the talabat story</p>
        <div className="row">
          <div className="col-sm col-md-6">
            <div className="box">
              <div className="img-box partner"></div>
              <div className="box-info">
                <h4>become a partner</h4>
                <p>Reach more customers and achieve growth with us</p>
                <Link href="/">find out more</Link>
              </div>
            </div>
          </div>
          <div className="col-sm col-md-6">
            <div className="box">
              <div className="img-box career"></div>
              <div className="box-info">
                <h4>build your career</h4>
                <p>Join the dynamic team that makes it all happen</p>
                <Link href="/">find jobs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discover">
        <div className="row">
          <div className="col-sm col-md-6">
            <h4>discover the new talabat app</h4>
            <p>get what you need, when you need it</p>
            <div className="imgs-box">
              <Image src={Appstore} alt="." />
              <Image src={PalyStore} alt="." />
              <Image src={HuaweiStore} alt="." />
            </div>
          </div>
          <div className="col-sm col-md-6">
            <div className="box-left">
              <Image src={ImgView} alt="." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
