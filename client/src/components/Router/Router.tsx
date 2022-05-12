import React, { ReactElement, ReactNode } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';

type RouteItemType = {
  id: number;
  path: string;
  component: ReactNode;
  requireAuth?: boolean;
  default?: boolean;
};

type RoutesType = {
  [key in string]: RouteItemType;
};

type RouterProps = {
  routes: RoutesType;
};

export default function Router({ routes }: RouterProps): ReactElement {
  const isAuth = useAuth();
  const location = useLocation();
  const allowedRoutes = Object.values(routes).filter((obj) => !!obj.requireAuth === isAuth);
  const defaultRoute = allowedRoutes.find((obj) => obj.default)?.path ?? '/';
  return (
    <Routes>
      {allowedRoutes.map(({ id, path, component }) => (
        <Route key={id} path={path} element={component} />
      ))}
      <Route path="*" element={<Navigate to={defaultRoute} state={{ from: location }} replace />} />
    </Routes>
  );
}
