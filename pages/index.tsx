import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {
  const meta = {
    title: '7kaji.page',
    description: 'いろいろ書いていきます。',
  };

  return (
    <Layout meta={meta} >
      <h1>こんにちは <span className="wave">👋</span></h1>
      <p>
        <Link href="/about">
          <a>このサイトについて</a>
        </Link>
      </p>
    </Layout>
  )
};


export default IndexPage
