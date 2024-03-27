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
import BookDetail from './components/BookDetail.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch('https://shawonece.github.io/fake-data/books.json'),
        element: <Home />,
      },
      {
        path: "/listed-books",
        loader: () => fetch('https://shawonece.github.io/fake-data/books.json'),
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        loader: () => fetch('https://shawonece.github.io/fake-data/books.json'),
        element: <PagesToRead />,
      },
      {
        path: "/discover",
        loader: () => fetch('https://shawonece.github.io/fake-data/books.json'),
        element: <Discover />,
      },
      {
        path: "/top-picks",
        element: <TopPicks />,
      },
      {
        path: "/book-detail/:id",
        loader: () => fetch('https://shawonece.github.io/fake-data/books.json'),
        element: <BookDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
