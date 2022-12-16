import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>너 KPOP좀 아니?</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <meta
            name="naver-site-verification"
            content="ff3d1d8302047a4ebcd535996e11f5344774992b"
          />
          <meta
            name="naver-site-verification"
            content="1e08c718c78260bbb48647d935c4fc1c72645bd0"
          />
          <script
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js"
            integrity="sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/"
            crossorigin="anonymous"
          ></script>
          <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
          <script
            type="text/javascript"
            src="//t1.daumcdn.net/kas/static/ba.min.js"
            async
          ></script>
        </Head>
        <body>
          <div>
            <Main />
            {/* <ins
              className="kakao_ad_area"
              data-ad-unit="DAN-vmRbfJoxeLsw4jE9"
              data-ad-width="320"
              data-ad-height="100"
            ></ins> */}
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
