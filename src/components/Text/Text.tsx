import * as React from 'react';
import { ReactNode } from 'react';
import './style.scss';
import { mergedObject } from '@src/helpers/common';

export interface ITextProps {
  children: ReactNode;
  className?: string[];
  style?: object[];
}
export const Text: React.FC<ITextProps> = function ({
  children,
  className = [],
  style = [],
}) {
  return (
    <div className={'text ' + className.join(' ')} style={mergedObject(style)}>
      {children}
    </div>
  );
};
