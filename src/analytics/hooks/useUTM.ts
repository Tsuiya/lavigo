import { useEffect } from 'react';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

export const useUTM = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    let hasUTM = false;
    const utmData: Record<string, string> = {};

    UTM_KEYS.forEach((key) => {
      const value = urlParams.get(key);
      if (value) {
        utmData[key] = value;
        hasUTM = true;
      }
    });

    if (hasUTM) {
      // Salva no localStorage para uso futuro (atribuição de conversão)
      localStorage.setItem('utm_data', JSON.stringify(utmData));
    }
  }, []);
};

export const getUTM = () => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem('utm_data');
  return stored ? JSON.parse(stored) : null;
};
