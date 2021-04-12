import { defineComponent } from 'vue';
import { Context } from '../../../types/context.d';
import useHelloWorld from './useHelloWorld';
import useRender from './useRender';

export type Props = {
  msg?: string,
};

export type HelloWorld = Context<ReturnType<typeof useHelloWorld>> & Props;

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: () => '',
      required: false,
    },
  },
  emits: ['custom'],
  render: useRender,
  setup: useHelloWorld,
});
