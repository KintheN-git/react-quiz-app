import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Quiz from "../pages/quiz/Quiz";
import ScoreBoard from "../pages/scoreboard/ScoreBoard";
import MainLayout from "../layouts/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/quiz/:difficulty/:category/:amount",
        element: <Quiz />,
      },
      {
        path: "/scoreboard",
        element: <ScoreBoard />,
      },
    ],
  },
]);

export default routes;
