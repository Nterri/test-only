import * as React from 'react';
import './style.scss';
import { mergedObject } from '@src/helpers/common';

export enum Direction {
  top = 'top',
  left = 'left',
  bottom = 'bottom',
  right = 'right',
}

export interface IButtonArrowProps {
  onClick: () => void;
  direction: Direction;
  disabled?: boolean;
  className?: string[];
  style?: object[];
}
export const ButtonArrow: React.FC<IButtonArrowProps> = function ({
  onClick,
  direction,
  disabled = false,
  className = [],
  style = [],
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        'button_arrow ' +
        (disabled ? 'disabled ' : '') +
        direction +
        ' ' +
        className.join(' ')
      }
      style={mergedObject(style)}
    >
      <span></span>
    </button>
  );
};
