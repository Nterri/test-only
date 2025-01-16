import * as React from 'react';
import { useState } from 'react';
import './style.scss';
import { Text } from '@src/components/Text/Text';
import { useResponsiveStyle } from '@src/hooks/useResponsiveStyle';
import data from '@src/data';
import { Swiper as SwiperClass } from 'swiper/types';
import { mergedObject } from '@src/helpers/common';
import { YearsContainer } from '@src/components/YearsContainer/YearsContainer';
import { SwiperControlPanel } from '@src/components/SwiperControlPanel/SwiperControlPanel';
import { SwiperContainer } from '@src/components/SwiperContainer/SwiperContainer';

export interface ITimeLineProps {}

export const TimeLine: React.FC<ITimeLineProps> = function ({}) {
  const [activeIndexGlobal, setActiveIndexGlobal] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hide, setHide] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<SwiperClass>();

  const resetSwiper = () => {
    setTimeout(() => {
      setActiveIndex(0);
      if (swiper) {
        swiper.slideTo(0);
      }
    }, 500);
    hoverEffect();
  };

  const hoverEffect = () => {
    setHide(true);
    setTimeout(() => setHide(false), 1000);
  };

  return (
    <div
      className='timeline'
      style={mergedObject([
        {
          paddingTop: '15px',
          paddingBottom: '15px',
        },
      ])}
    >
      <Text
        className={['pt-sans-bold', 'textColor', 'before-decoration']}
        style={[
          useResponsiveStyle(20, 56, 'fontSize', 'px'),
          useResponsiveStyle(5, 80, 'paddingLeft', 'px'),
          useResponsiveStyle(0, 90, 'marginBottom', 'px'),
        ]}
      >
        Исторические <br /> даты
      </Text>
      <YearsContainer
        data={data}
        index={activeIndexGlobal}
        setIndex={(index) => {
          setActiveIndexGlobal(index);
          hoverEffect();
        }}
      />
      <div className='bottom-slider'>
        <SwiperControlPanel
          index={activeIndexGlobal}
          resetSwiper={resetSwiper}
          data={data}
          setIndex={setActiveIndexGlobal}
          style={[useResponsiveStyle(20, 56, 'paddingBottom', 'px')]}
        />
        <SwiperContainer
          indexGlobal={activeIndexGlobal}
          setIndex={(index) => {
            setActiveIndex(index);
            if (swiper) {
              swiper.slideTo(index);
            }
          }}
          setSwiper={setSwiper}
          hide={hide}
          data={data}
        />
      </div>
    </div>
  );
};
