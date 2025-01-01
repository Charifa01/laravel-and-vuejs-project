import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import ResetPassword from '../views/ResetPassword.vue';
import RequestPassword from '../views/RequestPassword.vue';
import AppLayout from '../components/AppLayout.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import projects from '../views/projects/projects.vue';
import orders from '../views/orders/orders.vue';
import users from '../views/users/users.vue';
import Customers from '../views/customers/Customers.vue';
import Reports from '../views/Reports/Reports.vue';


const routes = [
    {
        path: '/',
        name: 'App',
        component: AppLayout,
        meta :{
            requiresAuth : true
        },
        children :[
            {
                path: '/dashboard',
                name: 'dashboard',
                component: Dashboard
            },
            {
                path: '/products',
                name: 'products',
                component: projects
            },
            {
                path: '/orders',
                name: 'orders',
                component: orders
            },
            {
                path: '/users',
                name: 'users',
                component: users
            },
            {
                path: '/customers',
                name: 'customers',
                component: Customers 
            },
            {
                path: '/reports',
                name: 'reports',
                component: Reports
            },

        ]
      },
        
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/resetPassword',
            name: 'ResetPassword',
            component: ResetPassword
        },
        {
            path: '/requestPassword',
            name: 'RequestPassword',
            component: RequestPassword
        },
        {
            path: '/:pathMatch(.*)',
            name: 'notfound',
            component: NotFoundPage,
          }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;