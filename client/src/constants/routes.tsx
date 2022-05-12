import React from 'react';
import LoginPage from '../pages/Login';
import RegPage from '../pages/Reg/RegPage';

const routes = {
  login: {
    id: 2,
    path: '/login',
    component: <LoginPage pathToReg="/reg" />,
    default: true,
  },
  reg: {
    id: 3,
    path: '/reg',
    component: <RegPage pathToLogin="/login" />,
  },
  home: {
    id: 4,
    path: '/home',
    component: <div>home</div>,
    requireAuth: true,
    default: true,
  },
};

export default routes;
