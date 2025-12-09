import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// Inject scrollbar styles directly into the document with !important
const scrollbarStyles = `
  /* Force webkit scrollbar styles - must come first */
  ::-webkit-scrollbar {
    width: 8px !important;
    height: 8px !important;
  }
  ::-webkit-scrollbar-track {
    background: #050816 !important;
    border-radius: 9999px !important;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #8b5cf6 0%, #ec4899 100%) !important;
    border-radius: 9999px !important;
    border: none !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #a855f7 0%, #f472b6 100%) !important;
  }
  ::-webkit-scrollbar-button {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  ::-webkit-scrollbar-corner {
    background: #050816 !important;
  }
  /* Specific targeting */
  html::-webkit-scrollbar,
  body::-webkit-scrollbar {
    width: 8px !important;
    height: 8px !important;
  }
  html::-webkit-scrollbar-track,
  body::-webkit-scrollbar-track {
    background: #050816 !important;
    border-radius: 9999px !important;
  }
  html::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #8b5cf6 0%, #ec4899 100%) !important;
    border-radius: 9999px !important;
    border: none !important;
  }
  html::-webkit-scrollbar-thumb:hover,
  body::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #a855f7 0%, #f472b6 100%) !important;
  }
  html::-webkit-scrollbar-button,
  body::-webkit-scrollbar-button {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  html::-webkit-scrollbar-corner,
  body::-webkit-scrollbar-corner {
    background: #050816 !important;
  }
  /* Firefox fallback */
  html, body {
    scrollbar-width: thin !important;
    scrollbar-color: #8b5cf6 #050816 !important;
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

// Also apply directly to html and body elements as a fallback
setTimeout(() => {
  if (document.documentElement) {
    document.documentElement.style.setProperty('scrollbar-width', 'thin', 'important');
    document.documentElement.style.setProperty('scrollbar-color', '#8b5cf6 #050816', 'important');
  }
  if (document.body) {
    document.body.style.setProperty('scrollbar-width', 'thin', 'important');
    document.body.style.setProperty('scrollbar-color', '#8b5cf6 #050816', 'important');
  }
}, 0);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
