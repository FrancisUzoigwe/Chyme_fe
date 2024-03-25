import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import LoadingPage from "./pages/auth/LoadingPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
