import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Section from "./Section.tsx";

const isDev = import.meta.env.DEV;

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: App,
    },
    {
      path: "/section",
      Component: Section,
    },
  ],
  {
    basename: isDev ? "/" : "/CodingTest",
  }
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
