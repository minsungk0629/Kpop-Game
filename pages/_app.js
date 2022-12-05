import "../styles/app.scss";
import Script from "next/script";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "meta head title에 들어가는 값",
  description: "meta head description에 들어가는 값",
  canonical: "https://www.carrotins.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "카카오톡, 페이스북에 링크 넣으면 연결되는 url",
    title: "카카오톡, 페이스북에 링크 넣으면 올라올 타이틀",
    site_name: "사이트이름",
    images: [
      {
        url: "카카오톡, 페이스북에에 링크 넣으면 올라올 이미지",
        width: 285,
        height: 167,
        alt: "이미지",
      },
    ],
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5K49WYZZEW"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5K49WYZZEW', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
