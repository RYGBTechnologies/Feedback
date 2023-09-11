import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html>
    <Head />
    <body className="bg-black" style={{overflow:"hidden",scrollBehavior:"smooth"}}>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document