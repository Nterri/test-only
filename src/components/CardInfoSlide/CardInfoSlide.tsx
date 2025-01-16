import * as React from 'react';
import './style.scss';
import { Text } from '@src/components/Text/Text';
import { useResponsiveStyle } from '@src/hooks/useResponsiveStyle';
import { DataItemSlides } from '@src/enum/data';

export interface ICardInfoSlideProps {
  slide: DataItemSlides;
  style?: object[];
}
export const CardInfoSlide: React.FC<ICardInfoSlideProps> = function ({
  slide,
  style = [],
}) {
  return (
    <div>
      <Text
        className={['pt-sans-regular', 'yearColor']}
        style={[useResponsiveStyle(16, 25, 'fontSize', 'px'), ...style]}
      >
        {slide.year}
      </Text>
      <Text
        className={['pt-sans-regular', 'textColor']}
        style={[useResponsiveStyle(14, 20, 'fontSize', 'px')]}
      >
        {slide.info}
      </Text>
    </div>
  );
};
