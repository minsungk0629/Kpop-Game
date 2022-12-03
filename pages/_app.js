import "../styles/app.scss";
import Script from "next/script";

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
      );
    </>
  );
}

export default MyApp;
