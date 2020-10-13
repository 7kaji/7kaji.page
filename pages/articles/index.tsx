import fs from 'fs';
import generateRss from '../../lib/rss';
import { getAllDocs } from '../../lib/doc';
import { Article } from '../../interfaces';
import Layout from '../../components/Layout';
import Link from 'next/link';

type Articles = {
  articles: Article[];
};

const articles = (props: Articles) => {
  const meta = {
    title: "記事一覧",
    description: '記事一覧です。'
  }

  return (
    <Layout meta={meta}>
      <h1>記事一覧</h1>
      <ul>
        {props.articles.map((article) => (
          <li key={article.slug}>
            <Link href={`articles/${article.slug}`}><a>{article.title}</a></Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  const docs = getAllDocs().reverse();

  const rss = generateRss(docs);
  fs.writeFileSync('./public/rss.xml', rss);

  const articles = docs.map(doc => {
    return { slug: doc.slug, title: doc.meta.title }
  });
  return {
    props: {
      articles,
    }
  };
}

export default articles;