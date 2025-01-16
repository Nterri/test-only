import * as React from 'react';
import './App.scss';
import 'swiper/css/navigation';
import 'swiper/css';
import { TimeLine } from '@src/components/TimeLine/TimeLine';

export interface IAppProps {}
export const App: React.FC<IAppProps> = function ({}) {
  return (
    <div className='container'>
      <div className='fullscreen'>
        <TimeLine />
      </div>
    </div>
  );
};
