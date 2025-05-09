export type Book = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  published: Date;
  firstAcquisition: Date;
  isbn?: string;
  language: string;
  edition?: string;
  numberOfPages: number;
  shelfLocation: string;
  barCode?: string;
  ddcCode?: string;
  genre?: string;
  placeOfPublication: string;
};
