import React from "react";
import {routerLinks} from "utils";

export const pages = [
  {
    layout: React.lazy(() => import("../layouts/auth")),
    isPublic: true,
    child: [
      {
        path: routerLinks("Login"),
        component: React.lazy(() => import("./auth/login")),
        title: "Login",
      }
    ],
  },
  {
    layout: React.lazy(() => import("../layouts/admin")),
    isPublic: false,
    child: [
      // {
      //   path: '/',
      //   component: routerLinks("Dashboard"),
      //   title: "Home",
      // },
      {
        path: routerLinks("Dashboard"),
        component: React.lazy(() => import("./admin/dashboard")),
        title: "Dashboard",
      },
      {
        path: routerLinks("User"),
        component: React.lazy(() => import("./admin/user")),
        title: "User",
      },
      {
        path: routerLinks("Vehicle"),
        component: React.lazy(() => import("./admin/vehicle")),
        title: "Vehicle",
      },
      {
        path: routerLinks("Rent"),
        component: React.lazy(() => import("./admin/rent")),
        title: "Rent",
      },
    ], // 💬 generate link to here
  }
];

export const arrayPaths = [];
pages.map((layout) => {
  const paths = [];
  layout.child.map((page) => {
    paths.push(page.path);
    return page;
  });
  arrayPaths.push(paths);
  return layout;
});
