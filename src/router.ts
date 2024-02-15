import { createRouter, createWebHistory } from 'vue-router';
import Test1Page from './routes/test-1/page.vue';
import Test2Page from './routes/test-2/page.vue';
import Test3Page from './routes/test-3/page.vue';

const routes = [
  {
    path: '/test-1',
    component: Test1Page,
  },
  {
    path: '/test-2',
    component: Test2Page,
  },
  {
    path: '/test-3',
    component: Test3Page,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.fullPath === '/') {
    return next('/test-1');
  }
  next();
});
