import LayoutArticle from '../../components/LayoutArticle';
import { Article } from '../../interfaces';
import { getAllDocs, getDocBySlug } from '../../lib/doc';
import markdownToHtml from '../../lib/markdown';

const article = (props: Article) => {
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
    fallback: true,
  };
}

export default article;
