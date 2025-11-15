import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Auth0Provider
   domain={import.meta.env.VITE_AUTH0_DOMAIN || "dev-03ifqltxbr6nn0hn.us.auth0.com"}
   clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || "RXlGXkr49Ev5MHpvAC6vKkZ4bVn11iwl"}
   authorizationParams={{
    // Use current origin dynamically so both dev and deployed origins work
    redirect_uri: window.location.origin
   }}
   audience={import.meta.env.VITE_AUTH0_AUDIENCE || "http://localhost:8000"}
   scope="openid profile email"
  >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
