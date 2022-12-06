import "../styles/app.scss";
import Script from "next/script";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "너 KPOP좀 아니",
  description: "KPOP 뮤직비디오 조회수 맞추기 게임, 너 케이팝 좀 아니?",
  canonical: "https://doyouknowkpop.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://doyouknowkpop.com",
    title: "너 KPOP좀 아니",
    site_name: "너 KPOP좀 아니",
    images: [
      {
        url: "https://ifh.cc/g/xgpQqk.png",
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
      <DefaultSeo {...DEFAULT_SEO} />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5K49WYZZEW"
      />
      <Script
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
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
