import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  meta?: {
    title?: string;
    description?: string;
    cartImage?: string;
    date?: string;
  };
}

const Layout = ({ children, meta: pageMeta }: Props) => {
  const meta = {
    title: '',
    description:
      '',
    date: '2020-01-01T00:00:00+09:00',
    cardImage:
      'https://og-image.now.sh/**Prism**%20with%20Next.js.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg',
    ...pageMeta
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="date" content={meta.date} />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>

      <nav>
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="flex justify-between items-center p-8 mx-2">

          <ul className="flex justify-between items-center space-x-2">
            <li>
              <div className="inline-block relative w-24">
                <Link href="/">
                  <a className="no-underline font-semibold sm:visible">
                    <p>🏠 ホーム</p>
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div className="inline-block relative w-24">
                <Link href="/articles">
                  <a className="no-underline font-semibold sm:visible">
                    <p>📖 記事一覧</p>
                  </a>
                </Link>
              </div>
            </li>
          </ul>

          <div className="no-underline font-semibold invisible sm:visible">
            <h1>{meta.title}</h1>
          </div>

          <ul className="flex justify-between items-center space-x-4">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/7kaji/7kaji.page"
                className="no-underline font-semibold text-gray-700"
              >
                🧑‍💻
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="skip">
        <article
          className="prose lg:prose-xl px-8 m-auto my-4 sm:my-16"
        >
          {children}
        </article>
      </div>
    </>
  );
}

export default Layout
