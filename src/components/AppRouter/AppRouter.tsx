import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditorPage from '../../pages/EditorPage/EditorPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import HomePage from '../../pages/HomePage/HomePage';
import { Paths } from '../../types/Paths.types';
import { IRoutes } from './AppRouter.types';

const AppRouter = () => {
  const routes: IRoutes[] = [
    { path: Paths.home, element: <HomePage /> },
    { path: Paths.editor, element: <EditorPage /> },
    { path: Paths.error, element: <ErrorPage /> }
  ];

  return (
    <main>
      <Routes>
        {routes.map(route => (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}
          />
        ))}
      </Routes>
    </main>
  );
};

export default AppRouter;
