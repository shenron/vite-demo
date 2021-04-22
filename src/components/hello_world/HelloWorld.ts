import { defineComponent, PropType } from 'vue';
import { Context } from '@/types/context';
import setup from './useHelloWorld';
import render from './useRender';

export type Props = {
  msg?: string,
};

export type HelloWorld = Context<ReturnType<typeof setup>> & Props;

export type HelloWorldEvents = {
  onCustom: (s: string) => void,
};

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: () => '',
      required: false,
    },

    // fix parent tsc lint
    onCustom: Function as PropType<HelloWorldEvents['onCustom']>,
    vSlots: Object as PropType<{
      default: () => string,
    }>,
  },
  emits: {
    // display warning at runtime
    custom: (args: string) => typeof args === 'string',
  },
  render,
  setup,
});
