import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import SavedTemplates from '@/components/SavedTemplates';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/saved-templates/',
      name: 'Saved Templates',
      component: SavedTemplates,
    },
  ],
});
