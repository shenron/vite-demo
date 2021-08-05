import { defineComponent } from 'vue';
import { Context } from '@/definitions/getContextValues';
import WithTemplate from '@/components/with_template/WithTemplate.vue';
import setup from './useApp';
import render from './useRender';

export type Props = {
};

export type App = Context<ReturnType<typeof setup>, Props>;

export default defineComponent({
  name: 'App',
  components: {
    WithTemplate,
  },
  props: {},
  render,
  setup,
});
