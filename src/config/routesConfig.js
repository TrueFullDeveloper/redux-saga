import { lazy } from "react";

// Project routes
export const routesConfig = [
  {
    path: "/login",
    component: lazy(() => import("../pages/login")),
    protected: false,
    exact: true,
  },
  {
    path: "/signup",
    component: lazy(() => import("../pages/signup")),
    protected: false,
    exact: true,
  },
  {
    path: "/profile",
    component: lazy(() => import("../pages/profile")),
    protected: true,
    exact: true,
  },
  {
    path: "/",
    component: lazy(() => import("../pages/mainPage")),
    protected: false,
    exact: true,
  },
  {
    path: "/photo_studio_catalog",
    component: lazy(() => import("../pages/photoStudioCatalog")),
    protected: false,
    exact: true,
  },
  {
    path: "/photo_studio/:studioId",
    component: lazy(() => import("../pages/photoStudioPage")),
    protected: false,
    exact: false,
  },
  {
    path: "/tour_manager/:tourManagerId",
    component: lazy(() => import("../pages/tourManagerPage")),
    protected: false,
    exact: false,
  },
  {
    path: "/tour/:tourId",
    component: lazy(() => import("../pages/tourPage")),
    protected: false,
    exact: false,
  },
  {
    path: "/user_profile/:userId",
    component: lazy(() => import("../pages/userPage")),
    protected: false,
    exact: false,
  },
  {
    path: "/not_found",
    component: lazy(() => import("../pages/notFoundPage")),
    protected: false,
    exact: true,
  },
];
