import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// Inject scrollbar styles directly into the document with !important
const scrollbarStyles = `
  /* Final Global Scrollbar Styling */
  *::-webkit-scrollbar {
    width: 8px !important;
    height: 8px !important;
  }
  *::-webkit-scrollbar-track {
    background: #050816 !important;
    border-radius: 9999px !important;
    border: none !important;
  }
  *::-webkit-scrollbar-thumb {
    background-color: transparent !important;
    background-image: linear-gradient(180deg, #8b5cf6 0%, #ec4899 100%) !important;
    border-radius: 9999px !important;
    border: none !important;
    min-height: 85px !important;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-image: linear-gradient(180deg, #a855f7 0%, #f472b6 100%) !important;
  }
  *::-webkit-scrollbar-button {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  *::-webkit-scrollbar-corner {
    background: #050816 !important;
  }
  /* Remove fallback to ensure WebKit styles apply */
  * {
    scrollbar-width: auto !important;
    scrollbar-color: auto !important;
  }
`;

// Create and inject style element
function injectScrollbarStyles() {
  // Remove existing style if present
  const existing = document.getElementById("custom-scrollbar-styles");
  if (existing) existing.remove();

  const styleElement = document.createElement("style");
  styleElement.id = "custom-scrollbar-styles";
  styleElement.textContent = scrollbarStyles;
  document.head.appendChild(styleElement);
}

// Inject immediately and also on DOM ready
injectScrollbarStyles();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectScrollbarStyles);
} else {
  injectScrollbarStyles();
}

// Fallback removed
setTimeout(() => {
  // Empty
}, 0);


import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
