import LayoutArticle from '../../components/LayoutArticle';
import { LayoutArticleProps } from '../../interfaces';
import { getAllDocs, getDocBySlug } from '../../lib/doc';
import markdownToHtml from '../../lib/markdown';

// 実行の順番
// 1. getStaticPaths()
//   実行されるタイミング
//     - 開発時: リクエスト毎
//     - 本番時: ビルド時
// 2. getStaticProps()
// 3. Doc()

export default function Doc(props: LayoutArticleProps) {
  return <LayoutArticle meta={props.meta}>{props.content}</LayoutArticle>;
}

export async function getStaticProps({ params }: { params: any }) {
  const doc = getDocBySlug(params.slug);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content
    }
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug
        }
      };
    }),
    fallback: 'unstable_blocking'
  };
}
