import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root.jsx';
import Home from './components/Home.jsx';
import ListedBooks from './components/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead.jsx';
import Discover from './components/Discover.jsx';
import TopPicks from './components/TopPicks.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/top-picks",
        element: <TopPicks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
