export const pushToDataLayer = (data: any) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

// Eventos padronizados
export const trackPageView = (pageName: string, pageType: string = "landing_page") => {
  pushToDataLayer({
    event: "page_view",
    page_type: pageType,
    page_name: pageName,
  });
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const trackScroll = (percentage: 50 | 75) => {
  pushToDataLayer({
    event: `scroll_${percentage}`,
  });
};

export const trackClickCTA = (ctaName: string, location: string) => {
  pushToDataLayer({
    event: "click_cta",
    cta_name: ctaName,
    location: location,
  });
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq('track', 'Contact', { content_name: ctaName, content_category: location });
  }
};

export const trackClickWhatsApp = (location: string) => {
  pushToDataLayer({
    event: "click_whatsapp",
    button_location: location,
  });
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq('track', 'Lead', { content_name: 'WhatsApp Click', content_category: location });
  }
};

export const trackQualifiedVisitor = () => {
  pushToDataLayer({
    event: "qualified_visitor",
  });
};

export const trackVideo = (
  eventName: "video_play" | "video_progress_25" | "video_progress_50" | "video_progress_75" | "video_complete",
  videoName: string
) => {
  pushToDataLayer({
    event: eventName,
    video_name: videoName,
  });
  
  // Track ViewContent on video play
  if (eventName === "video_play" && typeof window !== "undefined" && window.fbq) {
    window.fbq('track', 'ViewContent', { content_name: videoName, content_type: 'video' });
  }
};
