import { createWebHistory, createRouter } from 'vue-router';
import HomeVue from '../views/Home.vue';
import AboutVue from '../views/About.vue';
import NotFoundVue from '../views/NotFound.vue';
import LayoutVue from '../views/Layout.vue';

const routes = [
  {
    path: '/',
    component: LayoutVue,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeVue,
      },
      {
        path: '/about',
        name: 'About',
        component: AboutVue,
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
