import React, { useEffect } from 'react';
import { useTracking } from '../hooks/useTracking';
import { useUTM } from '../hooks/useUTM';

interface AnalyticsProviderProps {
  children: React.ReactNode;
  gtmId?: string;
  ga4Id?: string;
  metaPixelId?: string;
  clarityId?: string;
  adsId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  gtmId = 'GTM-TLZDFKDF', // Replace with actual GTM ID
  ga4Id = 'G-52202Y30RV', // Replace with actual GA4 ID
  metaPixelId = '1178074496288870', // Replace with actual Meta Pixel ID
  clarityId = 'wo1dxichdw', // Replace with actual Clarity ID
  adsId = 'AW-9890638758', // Replace with actual Google Ads ID
}) => {
  useUTM();
  useTracking("home");

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. DataLayer Initialization
    window.dataLayer = window.dataLayer || [];

    // 2. Google Tag Manager
    if (gtmId && !document.getElementById('gtm-script')) {
      const gtmScript = document.createElement('script');
      gtmScript.id = 'gtm-script';
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(gtmScript);
    }

    // 3. Google Analytics 4 (GA4)
    if (ga4Id && !document.getElementById('ga4-script')) {
      const ga4Script = document.createElement('script');
      ga4Script.id = 'ga4-script';
      ga4Script.async = true;
      ga4Script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
      document.head.appendChild(ga4Script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', ga4Id);
      
      // 4. Google Ads Tag
      if (adsId) {
        gtag('config', adsId);
      }
    }

    // 5. Meta Pixel
    if (metaPixelId && !document.getElementById('meta-pixel')) {
      const metaScript = document.createElement('script');
      metaScript.id = 'meta-pixel';
      metaScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${metaPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(metaScript);
    }

    // 6. Microsoft Clarity
    if (clarityId && !document.getElementById('clarity-script')) {
      const clarityScript = document.createElement('script');
      clarityScript.id = 'clarity-script';
      clarityScript.async = true;
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `;
      document.head.appendChild(clarityScript);
    }

  }, [gtmId, ga4Id, metaPixelId, clarityId, adsId]);

  return <>{children}</>;
};

// Global types for Window object
declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
    _fbq: any;
  }
}
