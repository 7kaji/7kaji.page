import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => {
  const meta = {
    title: 'このサイトについて',
    description: 'このサイトについて',
  };

  return (
    <Layout meta={meta}>
      <h1>このサイトについて</h1>
      <p>ここに説明をかく</p>
    </Layout>
  );
}

export default AboutPage
