import loadable from "@loadable/component";

import App from "./App";

const Home = loadable(() => import("./pages/Home"), { ssr: false });
const About = loadable(() => import("./pages/About"), { ssr: false });
const NotFound = loadable(() => import("./pages/NotFound"), { ssr: false });

export default [
  {
    component: App,
    routes: [
      {
        path: "/about",
        component: About,
      },
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        component: NotFound,
      },
    ],
  },
];
