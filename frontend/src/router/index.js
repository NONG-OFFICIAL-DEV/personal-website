import { createRouter, createWebHistory } from 'vue-router';
import Website from '../views/Website.vue';
import ContentManager from '../views/admin/ContentManager.vue';

const routes = [
  { path: '/', name: 'Website', component: Website },
  { path: '/content-manager', name: 'ContentManager', component: ContentManager },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
