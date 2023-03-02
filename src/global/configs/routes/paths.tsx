import { Home } from "@pages/index";

export const PATHS = {
  Home: {
    title: "Fruit Fresh",
    path: "/",
  },
};

export const ELEMENTS_PATHS = [
  {
    id: 1,
    path: PATHS.Home.path,
    element: <Home />,
  },
];
