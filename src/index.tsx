import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <App />
    </BrowserRouter>
  </QueryClientProvider>,

  document.getElementById("root")
);

reportWebVitals();
