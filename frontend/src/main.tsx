import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App';
import { EditQuestionPage } from './pages/EditQuestionPage';
import { EditQuizPage } from './pages/EditQuizPage';
import { EditSectionPage } from './pages/EditSectionPage';
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
        path: 'quizes/:quizId',
        element: <EditQuizPage />,
      },
      {
        path: 'quizes/:quizId/sections/:sectionId',
        element: <EditSectionPage />,
      },
      {
        path: 'quizes/:quizId/sections/:sectionId/questions/:questionId',
        element: <EditQuestionPage />,
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
