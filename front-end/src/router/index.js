import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import ResetPassword from '../views/ResetPassword.vue';
import RequestPassword from '../views/RequestPassword.vue';
import AppLayout from '../components/AppLayout.vue';
import NotFoundPage from '../views/NotFoundPage.vue';


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
                component: Dashboard
            },
            {
                path: '/orders',
                name: 'orders',
                component: Dashboard
            },
            {
                path: '/users',
                name: 'users',
                component: Dashboard
            },
            {
                path: '/customers',
                name: 'customers',
                component: Dashboard
            },
            {
                path: '/reports',
                name: 'reports',
                component: Dashboard
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