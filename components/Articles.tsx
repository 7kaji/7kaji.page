import * as React from 'react'
import { ArticlesProps } from '../interfaces';
import Link from 'next/link';

const List = ({ articles }: ArticlesProps) => (
  <>
    <ul>
      {articles.map((article) => (
        <li key={article.slug}>
          <Link href={`articles/${article.slug}`}><a>{article.title}</a></Link>
        </li>
      ))}
    </ul>
  </>
)

export default List
