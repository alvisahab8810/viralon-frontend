import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="./images/favicon-32x32.png" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Include your stylesheets and other scripts */}
        <link rel="stylesheet" href="/themes/viralon/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/themes/viralon/css/style.css" />
        <link rel="stylesheet" href="/themes/viralon/css/responsive.css" />
        <link rel="stylesheet" href="/themes/viralon/css/hero3.css" />
        
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Icons+Round"
        />
        {/* <!-- Add these lines to your <head> section --> */}
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <title>Viral On</title>

      
      </Head>
      <Script src="/themes/viralon/js/jquery.min.js" defer/>
      <Script src="/themes/viralon/js/bootstrap.bundle.min.js" defer/>
      <Script src="/themes/viralon/js/bootstrap.js" defer/>
      <Script src="/themes/viralon/js/main.js" defer/>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer/>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer/>
      <Script src="https://code.jquery.com/jquery-3.6.4.min.js"></Script>
   
  
     
      
      <Component {...pageProps} />
    </>);
}

export default MyApp;
