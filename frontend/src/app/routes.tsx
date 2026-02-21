import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { MapScreen } from "./components/MapScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/mapa",
    Component: MapScreen,
  },
]);
