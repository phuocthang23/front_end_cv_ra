import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router } from '@remix-run/router';
import DefaultLayout from '../layouts/DefaultLayout';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import TaskInformationPage from '../pages/task-list/TaskInformationPage';
import NotificationPage from '../pages/notification/NotificationPage';
import TaskTemplateRegistrationPage from '../pages/task-template/TaskTemplateRegistrationPage';
import { RegistrationTask } from '../pages/registration-task/RegistrationTask';

const routes: RouteObject[] = [
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    id: 'root',
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
      {
        path: '/task/information',
        Component: TaskInformationPage,
      },
      {
        path: '/notification/registration',
        Component: NotificationPage,
      },
      {
        path: '/task-template/registration',
        Component: TaskTemplateRegistrationPage,
      },
      {
        path: '/task-list/registration',
        Component: RegistrationTask,
      },
    ],
  },
];

const router: Router = createBrowserRouter(routes);

export default router;
