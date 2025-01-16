import { useEffect, useState } from 'react';

export const useResponsiveStyle = (
  min: number,
  max: number,
  name: string,
  suffix = '',
  minWidth = 320,
  maxWidth = 1440,
) => {
  const [style, setStyle] = useState({ [name]: `${min}${suffix}` });

  const updateStyle = () => {
    const width = window.innerWidth;

    if (width <= minWidth) {
      setStyle({ [name]: `${min}${suffix}` });
    } else if (width >= minWidth && width <= maxWidth) {
      const addSize = max - min;
      const newSize =
        min + addSize * ((width - minWidth) / (maxWidth - minWidth));
      setStyle({ [name]: `${newSize}${suffix}` });
    } else {
      setStyle({ [name]: `${max}${suffix}` });
    }
  };

  useEffect(() => {
    updateStyle(); // Установите начальный стиль
    window.addEventListener('resize', updateStyle);
    return () => window.removeEventListener('resize', updateStyle);
  }, [min, max, minWidth, maxWidth]); // Обновление при изменении этих параметров

  return style;
};
