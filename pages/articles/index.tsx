import { getAllDocs } from '../../lib/doc';
import { ArticlesProps } from '../../interfaces';
import Layout from '../../components/Layout';
import Articles from '../../components/Articles';

export default function Docs(props: ArticlesProps) {
  const meta = {
    title: "記事一覧",
    description: '記事一覧です。'
  }
  return (
    <Layout meta={meta}>
      <h1>記事一覧</h1>
      <Articles articles={props.articles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const docs = getAllDocs().reverse();
  const articles = docs.map(doc => {
    return { slug: doc.slug, title: doc.meta.title }
  });
  return {
    props: {
      articles,
    }
  };
}