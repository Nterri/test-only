import * as React from 'react';
import { useRef, useState } from 'react';
import './style.scss';
import { mergedObject } from '@src/helpers/common';
import { useResponsiveStyle } from '@src/hooks/useResponsiveStyle';
import { Text } from '@src/components/Text/Text';
import { RotateCircle } from '@src/components/RotateCircle/RotateCircle';
import { Data } from '@src/enum/data';
import gsap from 'gsap';

export interface IYearsContainerProps {
  data: Data;
  index: number;
  setIndex: (index: number) => void;
  style?: object[];
}
export const YearsContainer: React.FC<IYearsContainerProps> = function ({
  data,
  index,
  setIndex,
  style = [],
}) {
  const startEl = useRef();
  const endEl = useRef();

  React.useEffect(() => {
    gsap.to(startEl.current, {
      innerText: data[index].start,
      duration: 1,
      snap: {
        innerText: 1,
      },
    });
    gsap.to(endEl.current, {
      innerText: data[index].end,
      duration: 1,
      snap: {
        innerText: 1,
      },
    });
  }, [data[index].start, data[index].end]);

  return (
    <div
      className='years-container'
      style={mergedObject([useResponsiveStyle(25, 100, 'gap', 'px'), ...style])}
    >
      <RotateCircle data={data} index={index} setIndex={setIndex} />
      <Text
        className={['pt-sans-bold', 'startColor']}
        style={[
          useResponsiveStyle(56, 200, 'fontSize', 'px'),
          {
            zIndex: 2,
          },
        ]}
      >
        <span ref={startEl}>{data[0].start}</span>
      </Text>
      <Text
        className={['pt-sans-bold', 'endColor']}
        style={[
          useResponsiveStyle(56, 200, 'fontSize', 'px'),
          {
            zIndex: 2,
          },
        ]}
      >
        <span ref={endEl}>{data[0].end}</span>
      </Text>
    </div>
  );
};
