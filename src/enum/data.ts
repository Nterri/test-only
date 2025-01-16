export type DataItem = {
  id: number;
  name: string;
  start: number;
  end: number;
  slides: Array<DataItemSlides>;
};

export type DataItemSlides = { year: number; info: string };

export type Data = Array<DataItem>;
