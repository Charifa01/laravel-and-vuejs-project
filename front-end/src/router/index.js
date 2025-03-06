import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import ResetPassword from '../views/ResetPassword.vue';
import RequestPassword from '../views/RequestPassword.vue';
import AppLayout from '../components/AppLayout.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import Projects from '../views/projects/projects.vue';
import Orders from '../views/orders/orders.vue';
import Users from '../views/users/users.vue';
import Customers from '../views/customers/Customers.vue';
import Reports from '../views/Reports/Reports.vue';
import store from '../store';


const routes = [
      {
        path: '/',
        name: 'app',
        redirect: '/dashboard',
        component: AppLayout,
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: 'dashboard',
            name: 'dashboard',
            component: Dashboard
          },
          {
            path: 'products',
            name: 'products',
            component: Projects
          },
          {
            path: 'users',
            name: 'users',
            component: Users
          },
          {
            path: 'customers',
            name: 'customers',
            component: Customers
          },
          {
            path: 'orders',
            name: 'orders',
            component: Orders
          },
          {
            path: '/report',
            name: 'reports',
            component: Reports,
            meta: {
              requiresAuth: true
            }
          }
        ]
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          requiresGuest: true
        }
      },
      {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword,
        meta: {
          requiresGuest: true
        }
      },
      {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword,
        meta: {
          requiresGuest: true
        }
      },
      {
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: NotFoundPage,
      }
    ];
    
    const router = createRouter({
      history: createWebHistory(),
      routes
    })
    
    router.beforeEach((to, from, next) => {
      if (to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'login'})
      } else if (to.meta.requiresGuest && store.state.user.token) {
        next({name: 'app.dashboard'})
      } else {
        next();
      }
    
    })
    
    export default router;