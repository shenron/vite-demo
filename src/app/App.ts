import { defineComponent } from 'vue';
import type { Context } from '@/definitions/getContextValues';
import WithTemplate from '@/components/with_template/WithTemplate.vue';
import setup from './useApp';
import render from './useRender';

export type App = Context<typeof setup>;

export default defineComponent({
  name: 'App',
  components: {
    WithTemplate,
  },
  render,
  setup,
});
