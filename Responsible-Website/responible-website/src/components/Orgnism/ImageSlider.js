// import React, { useState, useRef } from 'react';
// import image1 from '../Atoms/images/lordShiva1.jpg';
// import image2 from '../Atoms/images/lordshiva2.jpg';
// import image3 from '../Atoms/images/lordShiva3.jpg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import styles from './ImageSlider.module.css';

// const ImageSlider = () => {
//   return (
//     <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
//     spaceBetween={50}
//     slidesPerView={1}
//     navigation
//     pagination={{ clickable: true }}
//     scrollbar={{ draggable: true }}
//    >
//       <SwiperSlide><img src={image1} alt='error' style={{width:'100%'}}/></SwiperSlide>
//       <SwiperSlide><img src={image2} alt='error' style={{width:'100%'}}/></SwiperSlide>
//       <SwiperSlide><img src={image3} alt='error' style={{width:'100%'}}/></SwiperSlide>
//       ...
//   </Swiper>
//   );
// };

// export default ImageSlider;

import React from 'react';
import image1 from '../Atoms/images/lordShiva1.jpg';
import image2 from '../Atoms/images/lordshiva2.jpg';
import image3 from '../Atoms/images/lordShiva3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
 import 'swiper/swiper-bundle.css'
import { Navigation, Pagination, Scrollbar, A11y,EffectFlip } from 'swiper/modules';

import styles from './ImageSlider.module.css';

const ImageSlider = () => {
  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y,EffectFlip]}
    spaceBetween={50}
    effect='flip'
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
   >
      <SwiperSlide><img src={image1} alt='error' style={{width:'100%'}} /></SwiperSlide>
     
      <SwiperSlide><img src={image2} alt='error' style={{width:'100%'}} /></SwiperSlide>
     
      <SwiperSlide><img src={image3} alt='error' style={{width:'100%'}} /></SwiperSlide>
      ...
     
  </Swiper>
  );
};

export default ImageSlider;

