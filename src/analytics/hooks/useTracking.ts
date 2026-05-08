import { useEffect, useCallback } from 'react';
import { trackPageView, trackScroll, trackQualifiedVisitor, trackClickCTA, trackClickWhatsApp } from '../dataLayer';

export const useTracking = (pageName: string = "home") => {
  // Track Page View
  useEffect(() => {
    trackPageView(pageName);
  }, [pageName]);

  // Track Time on Page & Scroll Depth
  useEffect(() => {
    let qualifiedFired = false;
    let scroll50Fired = false;
    let scroll75Fired = false;

    // Timer for 60 seconds
    const timer = setTimeout(() => {
      if (!qualifiedFired) {
        trackQualifiedVisitor();
        qualifiedFired = true;
      }
    }, 60000);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;

      if (scrollPercentage >= 50 && !scroll50Fired) {
        trackScroll(50);
        scroll50Fired = true;
      }

      if (scrollPercentage >= 75 && !scroll75Fired) {
        trackScroll(75);
        scroll75Fired = true;
        if (!qualifiedFired) {
          trackQualifiedVisitor();
          qualifiedFired = true;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onCTAClick = useCallback((ctaName: string, location: string) => {
    trackClickCTA(ctaName, location);
  }, []);

  const onWhatsAppClick = useCallback((location: string) => {
    trackClickWhatsApp(location);
  }, []);

  return { onCTAClick, onWhatsAppClick };
};
