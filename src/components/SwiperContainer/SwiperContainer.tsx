import * as React from 'react';
import { mergedObject } from '@src/helpers/common';
import { useResponsiveStyle } from '@src/hooks/useResponsiveStyle';
import { Swiper as SwiperClass } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardInfoSlide } from '@src/components/CardInfoSlide/CardInfoSlide';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { Data } from '@src/enum/data';
import './style.scss';
import {
  ButtonArrow,
  Direction,
} from '@src/components/ButtonArrow/ButtonArrow';

export interface ISwiperContainerProps {
  indexGlobal: number;
  setIndex: (index: number) => void;
  setSwiper: (swiper: SwiperClass) => void;
  hide: boolean;
  data: Data;
}
export const SwiperContainer: React.FC<ISwiperContainerProps> = function ({
  indexGlobal,
  setIndex,
  hide,
  setSwiper,
  data,
}) {
  return (
    <div
      className='swiper-container'
      style={mergedObject([
        useResponsiveStyle(5, 80, 'paddingLeft', 'px'),
        useResponsiveStyle(5, 80, 'paddingRight', 'px'),
      ])}
    >
      <div
        className='swiper-container-prev'
        style={mergedObject([useResponsiveStyle(5, 20, 'marginRight', 'px')])}
      ></div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={useResponsiveStyle(25, 80, 'spaceBetween').spaceBetween}
        onSlideChange={(swiper: SwiperClass) => {
          setIndex(swiper.activeIndex);
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={setSwiper}
        className={'swiper ' + (hide ? 'hide' : '')}
        navigation={{
          prevEl: '.swiper-container-prev',
          nextEl: '.swiper-container-next',
        }}
        slidesPerView={'auto'}
        grabCursor
      >
        {data[indexGlobal].slides.map((slide, index) => (
          <SwiperSlide
            style={mergedObject([
              useResponsiveStyle(166, 400, 'maxWidth', 'px'),
            ])}
            key={index}
          >
            <CardInfoSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className='swiper-container-next'
        style={mergedObject([useResponsiveStyle(5, 40, 'marginLeft', 'px')])}
      ></div>
    </div>
  );
};
