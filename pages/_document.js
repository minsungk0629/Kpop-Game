import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <script
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js"
            integrity="sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/"
            crossorigin="anonymous"
          ></script>
          <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
        </Head>
        <body>
          <div>
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;