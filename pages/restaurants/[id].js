import { BsArrow90DegDown, BsEmojiSmile } from "react-icons/bs"
import { GoLocation, GoSmiley } from "react-icons/go"
import { IoMdLocate } from "react-icons/io"
import { BiRightArrow } from "react-icons/bi"
import { AiFillStar, AiOutlineComment, AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai"
import { MdDoubleArrow } from "react-icons/md"

export default function Posts1(props) {
  return (
    <div>
      <div className="container">
        <div className="item-one-page">
          <div className="item-head">
            <div className="item-back">
              <div className="item-info">
                <div className="item-img">
                  <img src={props.postdata.thumbnailUrl} />
                </div>
                <div className="item-text">
                  <h3>{props.postdata.title.substring(0, 13)} {props.postdata.id}</h3>
                  <p className="res-type">Lorem ipsum dolor sit {props.postdata.id}.</p>
                  <p className="res-select"><span><BsArrow90DegDown /></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi!</p>
                </div>
                <div className="item-search">
                  <div className="input-search">
                    <span><GoLocation /></span>
                    <input type="text" placeholder="Search for area, street name, landmark..." />
                    <span><IoMdLocate /></span>
                  </div>
                  <div className="box-btn">
                    <button className="btn btn-success">show menu<span><BiRightArrow /></span></button>
                  </div>
                </div>
                <div className="item-row-rate">
                  <div className="box-rate">
                    <span className="rate-num">4.0</span>
                    <span className="star">
                      <span className="color"><AiFillStar /></span>
                      <span className="color"><AiFillStar /></span>
                      <span className="color"><AiFillStar /></span>
                      <span className="color"><AiFillStar /></span>
                      <span><AiFillStar /></span>
                      <span>(4 Ratings  )</span>
                    </span>
                  </div>
                  <div className="box-reviews">
                    <span><span className="icon"><AiOutlineComment /> </span>3 reviews</span>
                  </div>
                  <div className="box-pay">
                    <span className="item icon"><MdDoubleArrow /></span>
                    <span className="item">
                      <img src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_card_visa-256.png" />
                    </span>
                    <span className="item">
                      <img src="https://www.talabat.com/assets/images/logo-mastercard.svg" />
                    </span>
                    <span className="item">
                      <img src="https://www.talabat.com/assets/images/logo-cash.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-dec">
              <div className="box-start">
                <span className="title">{props.postdata.title.substring(0, 13)} delivers to you</span>
                <span className="icons">
                  <span className="icon facebook"><AiFillFacebook /></span>
                  <span className="icon twiter"><AiFillTwitterSquare /></span>
                </span>
              </div>
              <div className="box-data">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat dolore, earum maiores adipisci quod fuga consectetur
                  necessitatibus modi quas ipsum nulla quisquam dignissimos
                  quibusdam? Dolor quia aliquid impedit quibusdam numquam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit, totam nostrum iure minus id sit consequuntur quod
                  magni neque iusto, maiores sed? Culpa ad aliquid dolores
                  cumque at dolorum odit?</p>
              </div>
            </div>
            <div className="best-items">
              <div className="title">
                <h3>Best Seller Dishes</h3>
              </div>
              <div className="items-box row">
                <div className="item col-sm-6 col-lg-3">
                  <img src={`https://images.deliveryhero.io/image/talabat/MenuItems/20190819_Talabat_UAE_637019334074925990.jpg`} />
                  <p className="title-item">From Drinks:</p>
                  <p className="food">Iced Spanish Latte</p>
                </div>
                <div className="item col-sm-6 col-lg-3">
                  <img src={`https://images.deliveryhero.io/image/talabat/MenuItems/20190819_Talabat_UAE_637019330882774464.jpg`} />
                  <p className="title-item">From Savory:</p>
                  <p className="food">Grilled Cheese</p>
                </div>
                <div className="item col-sm-6 col-lg-3">
                  <img src={`https://images.deliveryhero.io/image/talabat/MenuItems/Healthy_Chicken_Sand_637595382629767521.jpg`} />
                  <p className="title-item">From Savory:</p>
                  <p className="food">Healthy Chicken Sandwich</p>
                </div>
                <div className="item col-sm-6 col-lg-3">
                  <img src={`https://images.deliveryhero.io/image/talabat/MenuItems/20190819_Talabat_UAE_637019334138787238.jpg`} />
                  <p className="title-item">From Savory:</p>
                  <p className="food">Sparkling Cascara</p>
                </div>
              </div>
            </div>
            <div className="res-notes">
              <div className="head-note">
                <div className="title">Notes Cafe Reviews (139)</div>
                <div className="rate">
                  <span className="rate-num">4.0</span>
                  <span className="star">
                    <span className="color"><AiFillStar /></span>
                    <span className="color"><AiFillStar /></span>
                    <span className="color"><AiFillStar /></span>
                    <span className="color"><AiFillStar /></span>
                    <span><AiFillStar /></span>
                    <span>(4 Ratings  )</span>
                  </span>
                </div>
              </div>
              <div className="rate-face row">
                <div className="item col-sm-6 col-lg-3">
                  <div className="emoj">
                    <span><BsEmojiSmile /> very good</span>
                  </div>
                  <div className="text">
                    <p>Order Packaging</p>
                  </div>
                </div>
                <div className="item col-sm-6 col-lg-3">
                  <div className="emoj">
                    <span><BsEmojiSmile /> very good</span>
                  </div>
                  <div className="text">
                    <p>Order Packaging</p>
                  </div>
                </div>
                <div className="item col-sm-6 col-lg-3">
                  <div className="emoj">
                    <span><BsEmojiSmile /> very good</span>
                  </div>
                  <div className="text">
                    <p>Order Packaging</p>
                  </div>
                </div>
                <div className="item col-sm-6 col-lg-3">
                  <div className="emoj">
                    <span><BsEmojiSmile /> very good</span>
                  </div>
                  <div className="text">
                    <p>Order Packaging</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="comments-box">
              <div className="comment-items">
                <div className="item">
                  <div className="comment-head">
                    <div className="box">
                      <p className="rate-face">
                        😊Amazing
                      </p>
                      <p className="name">
                        name***
                      </p>
                    </div>
                    <div className="box-date">6 may 2022</div>
                  </div>
                  <div className="comment-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-head">
                    <div className="box">
                      <p className="rate-face">
                        🙂Good
                      </p>
                      <p className="name">
                        name***
                      </p>
                    </div>
                    <div className="box-date">15 March 2022</div>
                  </div>
                  <div className="comment-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-head">
                    <div className="box">
                      <p className="rate-face">
                        😊Amazing
                      </p>
                      <p className="name">
                        name***
                      </p>
                    </div>
                    <div className="box-date">1 may 2022</div>
                  </div>
                  <div className="comment-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-head">
                    <div className="box">
                      <p className="rate-face">
                        😐ok
                      </p>
                      <p className="name">
                        name***
                      </p>
                    </div>
                    <div className="box-date">6 january 2022</div>
                  </div>
                  <div className="comment-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p>{props.postdata.title}</p>
      <p>{props.postdata.id}</p>
      <img src={props.postdata.thumbnailUrl} /> */}
    </div>
  );
}


export async function getStaticPaths() {
  const req = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await req.json();

  const paths = data.map((ele) => {
    return {
      params: { id: `${ele.id}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      postdata: data,
    },
  };
}
