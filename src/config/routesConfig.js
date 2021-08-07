import { lazy } from "react";

// Project routes
export const routesConfig = [
  {
    path: "/",
    component: lazy(() => import("../pages/mainPage")),
  },
  {
    path: "/photo_studio",
    component: lazy(() => import("../pages/photoStudio")),
  },
  {
    path: "/photographer",
    component: lazy(() => import("../pages/photographer")),
  },
  {
    path: "/tour",
    component: lazy(() => import("../pages/tourPage")),
  },
];
