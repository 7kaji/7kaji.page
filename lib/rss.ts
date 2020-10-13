import { LayoutArticleProps } from '../interfaces';

const generateRssItem = (article: LayoutArticleProps): string => `
  <item>
    <guid>https://7kaji.page/articles/${article.slug}</guid>
    <title>${article.meta.title}</title>
    <link>https://7kaji.page/articles/${article.slug}</link>
    <description>${article.meta.description}</description>
    <pubDate>${new Date(article.meta.date).toString()}</pubDate>
  </item>
`;

const generateRss = (articles: LayoutArticleProps[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>7kaji.page | 記事一覧</title>
      <link>https://7kaji.page/articles</link>
      <description>いろいろ書いていきます。</description>
      <language>ja</language>
      <lastBuildDate>${new Date(articles[0].meta.date).toString()}</lastBuildDate>
      <atom:link href="https://7kaji.page/rss.xml" rel="self" type="application/rss+xml"/>
      ${articles.map(generateRssItem).join('')}
    </channel>
  </rss>
`;

export default generateRss;