// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type LayoutArticleProps = {
  content?: string;
  meta?: {
    title?: string;
    description?: string;
    cartImage?: string;
    date?: string;
  };
};

export type ArticleProps = {
  slug: string;
  title: string;
};

export type ArticlesProps = {
  articles: ArticleProps[];
};
