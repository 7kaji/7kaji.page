---
title: 'Google Analytics 対応した'
description: 'サイトを Google Analytics に対応させた'
date: '2020-10-15T00:00:00+09:00'
---

# Google Analytics 対応

 <img src="/images/2020-10-15-ga.png" alt="2020-10-15-ga-image" />

サイト自体を Google Analytics に対応させた。Next.js は、いろいろなサンプルが [ここ](https://github.com/vercel/next.js/tree/canary/examples/) で見れるっぽいんだけど、Google Analytics の対応サンプルもあったのでここを参考に設定した。

## TypeScript 対応


ほぼほぼ、サンプルを真似てやれば問題なさそうだけど、gtag メソッドの型定義のところでエラーがでているので、`next-env.d.ts に追加して回避した。

```ts
// next-env.d.ts

interface Window {
  // pageview
  gtag(
    string,
    string,
    { page_path: string }
  )
  // event
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string
      event_category: string
      value?: string
    }
  )
}
```

全体の変更点は [ここ](https://github.com/7kaji/7kaji.page/pull/4)

## REF

- [next.js/examples/with-google-analytics at canary · vercel/next.js](https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics)
- [Using Google Analytics with NextJS and TypeScript | Frontend Digest](https://medium.com/frontend-digest/using-nextjs-with-google-analytics-and-typescript-620ba2359dea)
- [Next.jsでGoogle Analyticsを使えるようにする - パンダのプログラミングブログ](https://panda-program.com/posts/nextjs-google-analytics/#typescript%E5%AF%BE%E5%BF%9C%E3%82%92%E3%81%99%E3%82%8B)
