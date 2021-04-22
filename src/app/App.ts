import { defineComponent } from 'vue';
import WithTemplate from '@/components/with_template/WithTemplate.vue';
import { Context } from '@/getContextValues';
import setup from './useApp';
import render from './useRender';

export type App = Context<ReturnType<typeof setup>>;

export default defineComponent({
  components: {
    WithTemplate,
  },
  name: 'App',
  render,
  setup,
});
