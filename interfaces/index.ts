// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

type meta = {
  // title?: string;
  // description?: string;
  // cardImage?: string;
  // date?: string;
  [key: string]: any;
};

export type Article = {
  slug?: string;
  title?: string;
  content?: string;
  meta: meta;
};
