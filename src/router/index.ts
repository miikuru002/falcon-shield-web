import AppLayout from '@/layout/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          redirect: '/home'
        },
        {
          path: 'home',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue')
        },
        {
          path: 'my-devices',
          name: 'my-devices',
          component: () => import('@/views/pages/my-devices/MyDevices.vue')
        },
        {
          path: 'my-properties',
          name: 'my-properties',
          component: () => import('@/views/pages/my-properties/MyProperties.vue')
        },
        {
          path: 'events',
          name: 'events',
          component: () => import('@/views/pages/events/Events.vue')
        },

        //UI KIT
        {
          path: '/uikit',
          children: [
            {
              path: 'formlayout',
              name: 'formlayout',
              component: () => import('@/views/uikit/FormLayout.vue')
            },
            {
              path: 'input',
              name: 'input',
              component: () => import('@/views/uikit/InputDoc.vue')
            },
            {
              path: 'button',
              name: 'button',
              component: () => import('@/views/uikit/ButtonDoc.vue')
            },
            {
              path: 'table',
              name: 'table',
              component: () => import('@/views/uikit/TableDoc.vue')
            },
            {
              path: 'list',
              name: 'list',
              component: () => import('@/views/uikit/ListDoc.vue')
            },
            {
              path: 'tree',
              name: 'tree',
              component: () => import('@/views/uikit/TreeDoc.vue')
            },
            {
              path: 'panel',
              name: 'panel',
              component: () => import('@/views/uikit/PanelsDoc.vue')
            },

            {
              path: 'overlay',
              name: 'overlay',
              component: () => import('@/views/uikit/OverlayDoc.vue')
            },
            {
              path: 'media',
              name: 'media',
              component: () => import('@/views/uikit/MediaDoc.vue')
            },
            {
              path: 'message',
              name: 'message',
              component: () => import('@/views/uikit/MessagesDoc.vue')
            },
            {
              path: 'file',
              name: 'file',
              component: () => import('@/views/uikit/FileDoc.vue')
            },
            {
              path: 'menu',
              name: 'menu',
              component: () => import('@/views/uikit/MenuDoc.vue')
            },
            {
              path: 'charts',
              name: 'charts',
              component: () => import('@/views/uikit/ChartDoc.vue')
            },
            {
              path: 'misc',
              name: 'misc',
              component: () => import('@/views/uikit/MiscDoc.vue')
            },
            {
              path: 'timeline',
              name: 'timeline',
              component: () => import('@/views/uikit/TimelineDoc.vue')
            }
          ]
        },
        //PAGES
        {
          path: '/pages/empty',
          name: 'empty',
          component: () => import('@/views/pages/Empty.vue')
        },
        {
          path: '/pages/crud',
          name: 'crud',
          component: () => import('@/views/pages/Crud.vue')
        }
      ]
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('@/views/pages/Landing.vue')
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/views/pages/auth/Login.vue')
    },
    {
      path: '/auth/access',
      name: 'accessDenied',
      component: () => import('@/views/pages/error/Access.vue')
    },
    //error
    {
      path: '/error',
      name: 'error',
      component: () => import('@/views/pages/error/Error.vue')
    },
    //404
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/pages/error/NotFound.vue')
    }
  ]
})

export default router
