import Document, { Head, Html, Main, NextScript } from 'next/document';

const GOOGLE_FONTS = ['Amatic+SC:wght@400;700']
  .map((font) => `family=${font}`)
  .join('&');

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          /> */}
          <link
            href={`https://fonts.googleapis.com/css2?${GOOGLE_FONTS}&display=swap`}
            rel="stylesheet"
          />
        </Head>
        <body className="h-full font-display bg-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
