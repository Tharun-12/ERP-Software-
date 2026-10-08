
// src/components/usePageTracking.tsx


import { useEffect } from "react";
import { useLocation 
} from "react-router-dom";


// Facebook Pixel ID
const FB_PIXEL_ID = "968629879626090";

// Tell TypeScript about Facebook Pixel's window.fbq
declare global {
  interface Window {
    fbq?: (
      command: string,
      eventName: string,
      parameters?: {
        event_source_url?: string;
        pixel_id?: string;
        [key: string]: unknown;
      }
    ) => void;
  }
}

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;

    // --------------------------------------------------
    // Google Analytics Page Tracking
    // --------------------------------------------------
    // const GA_TRACKING_ID = "G-B9DTNHXB5N";
    //
    // if (window.gtag) {
    //   window.gtag("config", GA_TRACKING_ID, {
    //     page_path: pagePath,
    //   });
    // }

    // --------------------------------------------------
    // Facebook Pixel Page Tracking
    // --------------------------------------------------
    if (window.fbq) {
      window.fbq("track", "PageView", {
        event_source_url: pagePath,
        pixel_id: FB_PIXEL_ID,
      });
    }
  }, [location]);

  return null;
}

export default usePageTracking;
