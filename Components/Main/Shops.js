import Link from "next/link";
import Image from "next/image";
import Appstore from "../../images/logo_appstore.svg";
import PalyStore from "/images/logo_playstore.svg";
import HuaweiStore from "/images/logo_huaweistore1.svg";

export default function Shops() {
  return (
    <div className="container">
      <div className="program">
        <h1>your everday, right away</h1>
        <p>
          Order food and grocery delivery online from hundreds of restaurants
          and shops nearby.
        </p>
        <div className="imgs">
          <Image src={Appstore} alt="App Store" />
          <Image src={PalyStore} alt="Play Store" />
          <Image src={HuaweiStore} alt="Huawei Store" />
        </div>
      </div>
      <div className="shops">
        <div className="row">
          <div className="col-sm col-md-6">
            <div className="box">
              <div className="img-box res">
                <img src={`https://www.talabat.com/images/Talabat/vertical-restaurants.png`} alt="..." />
              </div>
              <div className="box-info">
                <h4>restaurants</h4>
                <p>
                  Find deals, free delivery, and more from our restaurant
                  partners.
                </p>
                <Link href="/">explore</Link>
              </div>
            </div>
          </div>
          <div className="col-sm col-md-6">
            <div className="box">
              <div className="img-box gro">
                <img src={`https://www.talabat.com/images/Talabat/vertical-restaurants.png`} alt="..." />
              </div>
              <div className="box-info">
                <h4>grocery</h4>
                <p>
                  Don’t stand in line - order online! Choose from top stores
                  delivering groceries to you.
                </p>
                <Link href="/">explore</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm col-md-6">
            <div className="box">
              <div className="img-box phar">
                <img src={`https://www.talabat.com/images/Talabat/vertical-pharmacy.png`} alt="..." />
              </div>
              <div className="box-info">
                <h4>pharmacy</h4>
                <p>
                  Got the sniffles? We’ve got you. Get medicine delivered to you
                  quickly and easily.
                </p>
                <Link href="/">explore</Link>
              </div>
            </div>
          </div>
          <div className="col-sm col-md-6">
            <div className="box">
              <div className="img-box phar">
                <img src={`https://www.talabat.com/images/Talabat/vertical-flowers.png`} alt="..." />
              </div>
              <div className="box-info">
                <h4>Flowers</h4>
                <p>
                  Show them you care. We are ready to deliver flowers and chocolates to your loved one.
                </p>
                <Link href="/">explore</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
