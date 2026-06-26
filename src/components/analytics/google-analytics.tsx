import Script from "next/script";

/**
 * Google Analytics Component
 *
 * Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID.
 * Get your ID from: https://analytics.google.com
 *
 * Steps:
 * 1. Go to analytics.google.com
 * 2. Create a new property for nestcraft.in
 * 3. Get your Measurement ID (starts with G-)
 * 4. Replace the placeholder below
 */

const GA_MEASUREMENT_ID = "G-XJECWD1C7R";

export default function GoogleAnalytics() {

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

