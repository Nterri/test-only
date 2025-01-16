import * as React from 'react';
import './style.scss';
import { formatNumber, mergedObject } from '@src/helpers/common';
import { useResponsiveStyle } from '@src/hooks/useResponsiveStyle';
import { Text } from '@src/components/Text/Text';
import {
  ButtonArrow,
  Direction,
} from '@src/components/ButtonArrow/ButtonArrow';
import { Data } from '@src/enum/data';

export interface ISwiperControlPanelProps {
  index: number;
  setIndex: (index: number) => void;
  resetSwiper: () => void;
  data: Data;
  style?: object[];
}
export const SwiperControlPanel: React.FC<ISwiperControlPanelProps> =
  function ({ index, resetSwiper, setIndex, data, style = [] }) {
    return (
      <div
        className='swiper-slides-container'
        style={mergedObject([
          useResponsiveStyle(5, 80, 'paddingLeft', 'px'),
          useResponsiveStyle(10, 20, 'gap', 'px'),
          ...style,
        ])}
      >
        <Text
          className={['pt-sans-regular', 'textColor']}
          style={[useResponsiveStyle(14, 14, 'fontSize', 'px')]}
        >
          {formatNumber(index + 1)}/{formatNumber(data.length)}
        </Text>
        <div
          className='buttons-container'
          style={mergedObject([useResponsiveStyle(8.33, 20, 'gap', 'px')])}
        >
          <ButtonArrow
            disabled={index === 0}
            direction={Direction.left}
            onClick={() => {
              setIndex(index - 1);
              resetSwiper();
            }}
          />
          <ButtonArrow
            disabled={index === data.length - 1}
            direction={Direction.right}
            onClick={() => {
              setIndex(index + 1);
              resetSwiper();
            }}
          />
        </div>
      </div>
    );
  };
