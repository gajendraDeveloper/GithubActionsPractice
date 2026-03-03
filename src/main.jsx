import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./redux/Store.js";
import { Provider } from "react-redux";
import ToastNotification from "./context/ToastNotification.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastNotification>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ToastNotification>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
