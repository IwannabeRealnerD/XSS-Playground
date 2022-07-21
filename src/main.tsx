import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Index } from "@pages/index";
import { globalStyles } from "@styles/globalStyle";
import { PayloadCreator } from "@pages/payloadCreator";
import { Layout } from "@components/layout";
import { NotFound } from "@pages/notFound";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/payload-creator" element={<PayloadCreator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
);
