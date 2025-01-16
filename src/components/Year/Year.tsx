import * as React from 'react';
import './style.scss';
import { ReactNode } from 'react';
import { mergedObject } from '@src/helpers/common';
import { useResponsiveStyle } from '@src/hooks/useResponsiveStyle';

export interface ITitleProps {
  children: ReactNode;
  className?: string[];
}
export const Year: React.FC<ITitleProps> = function ({
  children,
  className = [],
}) {
  return (
    <div
      className={className.join(' ')}
      style={mergedObject([useResponsiveStyle(56, 200, 'fontSize', 'px')])}
    >
      {children}
    </div>
  );
};
