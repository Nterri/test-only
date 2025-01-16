export const mergedObject = (style: object[]) =>
  style.reduce((accumulator, current) => {
    return { ...accumulator, ...current };
  }, {});

export const formatNumber = (value: number) => {
  return value.toString().length === 1 ? '0' + value : value;
};
