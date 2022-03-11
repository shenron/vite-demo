import { defineComponent } from 'vue';
import { Context, ExternalProps } from '@/definitions/getContextValues';
import WithTemplate from '@/components/with_template/WithTemplate.vue';
import setup from './useApp';
import render from './useRender';

const props = {} as const;

export type Props = ExternalProps<typeof props>;

export type App = Context<typeof setup, Props>;

export default defineComponent({
  name: 'App',
  components: {
    WithTemplate,
  },
  props,
  render,
  setup,
});
