import React from "react";

export const MAIN_NAVIGATION = [
  {
    key: "home",
    path: "/",
    title: "",
    Component: React.lazy(() => import("@pages/Home")),
  },
  {
    key: "search",
    path: "/search",
    title: "",
    Component: React.lazy(() => import("@pages/Search")),
  },
  {
    key: "personal",
    path: "/personal/:id",
    title: "",
    Component: React.lazy(() => import("@pages/Personal")),
  },
  {
    key: "chatbot",
    path: "/chatbot",
    title: "",
    Component: React.lazy(() => import("@pages/Chatbot")),
  },
];

export const AUTH_NAVIGATION = [
  {
    key: "login",
    path: "/login",
    title: "",
    Component: React.lazy(() => import("@pages/Login")),
  },
  {
    key: "register",
    path: "/register",
    title: "",
    Component: React.lazy(() => import("@pages/Register")),
  },
];
