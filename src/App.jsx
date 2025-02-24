import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "./http.js"
import Welcome from './pages/Welcome';
import Index from './pages/Index.jsx';

const LoadingUi = ({ children }) => <Suspense fallback={<h1>Loading....</h1>}>{children}</Suspense>

const Challenges = lazy(() => import("./pages/Challenges.jsx"))
const Active = lazy(() => import("./pages/ActiveChalanges.jsx"));
const Completed = lazy(() => import("./pages/CompletedChallenges.jsx"));
const Failed = lazy(() => import("./pages/FailedChallenges.jsx"));
const Movies = lazy(() => import('./pages/Movies.jsx'));
const MoviesList = lazy(() => import("./pages/MovieList.jsx"));
const ViewMovie = lazy(() => import("./pages/ViewMovies.jsx"));
const ErrorPage = lazy(() => import("./pages/Error.jsx"));

const viewMovieLoader = async (param) => {
  const module = await import('./pages/ViewMovies.jsx');
  const data = await module.loader(param);
  return data
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Welcome />
      },
      {
        path: '/challenges',
        element: <Challenges />,
        children: [
          {
            index: true,
            element: <Active />
          },
          {
            path: 'completed',
            element: <Completed />
          },
          {
            path: 'failed',
            element: <Failed />
          }
        ]
      },
      {
        path: '/movies',
        id: 'movieRout',
        element: <Movies />,
        children: [
          {
            index: true,
            element: <MoviesList />,
          }, {
            path: 'viewMovie',
            element: <ViewMovie />,
            loader: viewMovieLoader
          }
        ]
      }
    ]

  }
])


function App() {

  return <QueryClientProvider client={queryClient}>
    <LoadingUi>
      <RouterProvider router={router} />
    </LoadingUi>
  </QueryClientProvider>


}

export default App
