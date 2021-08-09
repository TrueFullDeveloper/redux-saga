import { lazy } from "react";

// Project routes
export const routesConfig = [
  {
    path: "/",
    component: lazy(() => import("../pages/mainPage")),
  },
  {
    path: "/photo_studio_catalog",
    component: lazy(() => import("../pages/photoStudioCatalog")),
  },
  {
    path: "/tour_manager/:tourManagerId",
    component: lazy(() => import("../pages/tourManagerPage")),
  },
  {
    path: "/tour/:tourId",
    component: lazy(() => import("../pages/tourPage")),
  },
];
