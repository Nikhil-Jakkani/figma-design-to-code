import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Box } from "./screens/Box/Boxindex";
import { HomeLight } from "./screens/HomeLight";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <div className="portfolio-app">
      <HomeLight />
      <Box />
    </div>
  </StrictMode>
);
