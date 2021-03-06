// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';
import 'normalize.css';
import './main.css';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
