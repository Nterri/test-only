import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.scss';
import { mergedObject } from '@src/helpers/common';
import { useResponsiveStyle } from '@src/hooks/useResponsiveStyle';
import { Text } from '@src/components/Text/Text';
import gsap from 'gsap';
import { Data } from '@src/enum/data';

export interface IRotateCircleProps {
  data: Data;
  index: number;
  setIndex: (index: number) => void;
}
export const RotateCircle: React.FC<IRotateCircleProps> = function ({
  data,
  index,
  setIndex,
}) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(false);
    gsap
      .to(document.getElementById('block-container'), {
        duration: 1,
        rotate: 180 - 360 / data.length - (360 / data.length) * index,
        transformOrigin: 'center center',
      })
      .then(() => {
        setIsActive(true);
      });
  }, [index]);

  function generateArrayUpToNumber(n: number) {
    if (n < 1) return []; // Возвращаем пустой массив, если число меньше 1
    return Array.from({ length: n }, (_, index) => index);
  }

  return (
    <div
      className='block-container'
      id='block-container'
      style={mergedObject([
        {
          transform: `translate(-50%, -50%)`,
        },
        useResponsiveStyle(300, 550, 'width', 'px'),
        useResponsiveStyle(300, 550, 'height', 'px'),
      ])}
    >
      {generateArrayUpToNumber(data.length).map((item) => (
        <div
          className={'block-wrapper'}
          style={{
            rotate: (360 / data.length) * item + 'deg',
            transform: `translate(0, -50%)`,
          }}
          key={item}
        >
          <div className={'block'}>
            <div
              className={
                'block-hover pt-sans-bold textColor ' +
                (index === item ? 'block-active ' : '') +
                (isActive ? 'block-active-anim ' : '')
              }
              style={mergedObject([
                {
                  rotate:
                    -(360 / data.length) * item +
                    180 +
                    360 / data.length +
                    (360 / data.length) * index +
                    'deg',
                },
                useResponsiveStyle(20, 20, 'fontSize', 'px'),
              ])}
              data-content={data[item].name}
            >
              <button
                className='square'
                onClick={() => item !== index && setIndex(item)}
              >
                <Text
                  className={['pt-sans-regular', 'textColor']}
                  style={[useResponsiveStyle(20, 20, 'fontSize', 'px')]}
                >
                  {item + 1}
                </Text>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
