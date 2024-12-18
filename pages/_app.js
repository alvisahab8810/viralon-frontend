// import Head from "next/head";
// import Script from "next/script";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <link
//           rel="icon"
//           type="image/x-icon"
//           href="./images/favicon-32x32.png"
//         />
//         <meta
//           name="robots"
//           content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
//         />

//         {/* Include your stylesheets and other scripts */}
//         <link rel="stylesheet" href="/themes/viralon/css/bootstrap.min.css" />
//         <link rel="stylesheet" href="/themes/viralon/css/style.css" />
//         <link rel="stylesheet" href="/themes/viralon/css/responsive.css" />
//         <link rel="stylesheet" href="/themes/viralon/css/hero3.css" />
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Material+Icons+Round"
//         />
//         <link
//           href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
//           rel="stylesheet"
//         />
//         <link
//           href="https://unpkg.com/aos@2.3.1/dist/aos.css"
//           rel="stylesheet"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
//         />

//         <title>Viral On</title>

//         {/* Google Tag Manager (noscript) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-TFHSH9W4"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>
//         {/* End Google Tag Manager (noscript) */}
//       </Head>

//       {/* Google Tag Manager (script) */}
//       <Script
//         id="gtm-script"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             (function(w,d,s,l,i){
//               w[l]=w[l]||[];
//               w[l].push({'gtm.start':
//                 new Date().getTime(),event:'gtm.js'});
//               var f=d.getElementsByTagName(s)[0],
//                 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
//               j.async=true;
//               j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//               f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-TFHSH9W4');
//           `,
//         }}
//       />
//       {/* End Google Tag Manager (script) */}

//       <Script src="/themes/viralon/js/jquery.min.js" defer />
//       <Script src="/themes/viralon/js/bootstrap.bundle.min.js" defer />
//       <Script src="/themes/viralon/js/bootstrap.js" defer />
//       <Script src="/themes/viralon/js/main.js" defer />
//       <Script
//         src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
//         defer
//       />
//       <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer />
//       <Script src="https://code.jquery.com/jquery-3.6.4.min.js" defer/>

//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;



import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="./images/favicon-32x32.png"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Inline critical CSS if applicable */}
        <link rel="stylesheet" href="/themes/viralon/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/themes/viralon/css/style.css" />
        <link rel="stylesheet" href="/themes/viralon/css/responsive.css" />
        <link rel="stylesheet" href="/themes/viralon/css/hero3.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Icons+Round"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        <title>Viral On</title>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFHSH9W4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </Head>

      {/* Google Tag Manager (script) */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TFHSH9W4');
          `,
        }}
      />
      {/* End Google Tag Manager (script) */}

      {/* Non-Critical Scripts */}
      <Script src="/themes/viralon/js/jquery.min.js" defer />
      <Script src="/themes/viralon/js/bootstrap.bundle.min.js" defer />
      <Script src="/themes/viralon/js/main.js" defer />
      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy="lazyOnload"
      />
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
