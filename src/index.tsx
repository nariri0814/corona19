import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import "./index.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    <App />
  </QueryClientProvider>,

  document.getElementById("root")
);

reportWebVitals();
