import * as React from 'react'
/// @ts-ignore
import Document, { Main, NextScript, Head, Html } from 'next/document'

export default class MyDocument extends Document {
  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Voces"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="text" />
        </body>
      </Html>
    )
  }
}
