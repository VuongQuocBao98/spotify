import React from "react";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const routers = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/artist/:id",
    exact: true,
    main: ({ match }) => <ArtistPage match={match} />,
  },
  {
    path: "/album/:id",
    exact: true,
    main: ({ match }) => <AlbumPage match={match} />,
  },
  {
    path: "",
    exact: true,
    main: () => <NotFoundPage />,
  },
];

export default routers;
