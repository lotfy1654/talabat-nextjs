// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import Image from "next/image";
// import axios, { Axios } from "axios";
// import fImg from "/images/banner-img-1.png";

// export default function Restaurants(props) {
//   const [dataRes, setDataRes] = useState();
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
//       setDataRes(res.data);
//     });
//   }, []);

//   var allDataRes = useEffect(() => {
//     dataRes.map((ele) => (
//       <div key={ele.id}>
//         <p>{ele.title}</p>
//       </div>
//     ));
//   });

//   console.log(dataRes);

//   return (
//     <>
//       <Swiper
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
//       </Swiper>
//       <div>
//         {allDataRes}
//         {/* {dataRes.lenght < 1
//           ? dataRes.map((ele) => (
//               <div key={ele.id}>
//                 <p>{ele.title}</p>
//               </div>
//             ))
//           : "Hello"} */}
//       </div>
//     </>
//   );
// }

// // export async function getStaticProps() {
// //   const req = await fetch("https://jsonplaceholder.typicode.com/photos");
// //   const data = await req.json();

// //   return {
// //     props: {
// //       posts: data,
// //     },
// //   };
// // }
