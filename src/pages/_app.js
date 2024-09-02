import { useEffect } from 'react';
import Script from 'next/script';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Dynamically import bootstrap JS only on client side
    if (typeof window !== 'undefined') {
      // jQuery should be available first
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <>
      {/* jQuery must load first */}
      <Script 
        src="https://code.jquery.com/jquery-3.5.1.min.js" 
        strategy="beforeInteractive"
        onLoad={() => {
          console.log('jQuery loaded');
        }}
      />

      {/* Now load the layout and pages */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
