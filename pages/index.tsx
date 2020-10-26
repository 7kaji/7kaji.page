import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {
  const meta = {
    title: '7kaji.page',
    description: 'いろいろ書いていきます。',
  };

  return (
    <Layout meta={meta} >
      <h1>ハロー <span className="wave">👋</span></h1>
      <ul>
        <li>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/7kajii"
          className="no-underline font-semibold text-gray-700"
          >
            twitter
          </a>
        </li>
        <li>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/7kaji"
          className="no-underline font-semibold text-gray-700"
          >
            github
          </a>
        </li>
        <li>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://qiita.com/7kaji"
          className="no-underline font-semibold text-gray-700"
          >
            qiita
          </a>
        </li>
        <li>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://whitech0c0late.hatenablog.com"
          className="no-underline font-semibold text-gray-700"
          >
            hatenablog
          </a>
        </li>
      </ul>
      <p>
        <Link href="/about">
          <a>このサイトについて</a>
        </Link>
      </p>
    </Layout>
  )
};


export default IndexPage
