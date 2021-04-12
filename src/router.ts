import { h } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const component = () => h('p', 'Test component from router');

component.displayName = 'TestCmp';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/test',
    name: 'test',
    component,
  }],
});
