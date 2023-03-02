import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App';
import { EditQuizPage } from './pages/EditQuizPage';
import { NewQuizPage } from './pages/NewQuizPage';
import { QuizListPage } from './pages/QuizListPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'always',
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'quizes',
        element: <QuizListPage />,
      },
      {
        path: 'quizes/new',
        element: <NewQuizPage />,
      },
      {
        path: 'quizes/:id',
        element: <EditQuizPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
