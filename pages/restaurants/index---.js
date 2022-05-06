// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import fImg from "/images/banner-img-1.png";
// import Link from "next/link";
// import axios from "axios";
// // import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
// import Slider from "react-slick";
// import Head from 'next/head'


// export default function Restaurants(props) {
//   const [dataRes, setDataRes] = useState();
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };

//   const allDataResturants = (startData) => {
//     var dataarr = [];
//     var set = 0;
//     for (let i = startData; set <= 30; i++) {
//       dataarr.push(
//         <div key={props.allRestaurents[i].id} className="res-item">
//           <img src={props.allRestaurents[i].thumbnailUrl} className="res-img" />
//           <div className="res-info">
//             <Link href={`/restaurants/${props.allRestaurents[i].id}`}>
//               {`${props.allRestaurents[i].title} ${props.allRestaurents[i].title}`}
//             </Link>
//           </div>
//         </div>
//       );
//       // count += 100;
//       set++;
//       startData++;
//     }
//     // set++;
//     console.log(dataarr);
//     return dataarr;
//   };
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="restaurants">
//       <Head>
//         <link
//           rel="stylesheet"
//           type="text/css"
//           charset="UTF-8"
//           href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//         />
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//         />
//       </Head>
//       {/* <Swiper
//         pagination={pagination}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Image src={fImg} alt=".." />
//         </SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//         <SwiperSlide>Slide 10</SwiperSlide>
//         <SwiperSlide>
//           <Image src={fImg} alt=".." />
//         </SwiperSlide>
//       </Swiper> */}
//       {/* <div className="all-res-box">
//         <Swiper
//           pagination={pagination}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           <SwiperSlide className="swiper-slide-one">
//             {allDataResturants(0)}
//           </SwiperSlide>
//           <SwiperSlide className="swiper-slide-one">
//             {allDataResturants(31)}
//           </SwiperSlide>
//           <SwiperSlide className="swiper-slide-one">
//             {allDataResturants(62)}
//           </SwiperSlide>
//           <SwiperSlide className="swiper-slide-one">
//             {allDataResturants(93)}
//           </SwiperSlide>
//           <SwiperSlide className="swiper-slide-one">
//             {allDataResturants(124)}
//           </SwiperSlide>
//           // <SwiperSlide>{allDataResturants(155)}</SwiperSlide>
//         </Swiper>
//       </div>
//       <div> */}
//       {/* {props.allRestaurents.map((ele) => (
//           <div key={ele.id}>
//             <p>{ele.title}</p>
//             <img src={ele.thumbnailUrl} />
//             <hr />
//           </div>
//         ))} */}
//       {/* </div> */}
//       <div>
//         <AwesomeSlider>
//           <div>{allDataResturants(0)}</div>
//         </AwesomeSlider>
//         <div className="slide-container">
//           <Slider {...settings}>
//             <div>
//               {allDataResturants(0)}
//             </div>
//             <div>
//               {allDataResturants(0)}
//             </div>
//             <div>
//               {allDataResturants(0)}
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const req = await fetch("https://jsonplaceholder.typicode.com/photos");
//   const data = await req.json();

//   return {
//     props: {
//       allRestaurents: data,
//     },
//   };
// }
