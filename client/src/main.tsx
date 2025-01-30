import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";

import { ThemeContextProvider } from "./ThemeContext.tsx";
import i18n from "./i18n";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store/store.ts";
// Importing Graphql
import client from "./graphql/apolloClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ThemeContextProvider>
            <Provider store={store}>
              <ToastContainer />
              <App />
            </Provider>
          </ThemeContextProvider>
        </BrowserRouter>
      </ApolloProvider>
    </I18nextProvider>
  </React.StrictMode>
);
