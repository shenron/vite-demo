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

const HelloWorld = defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: () => '',
      required: false,
    },
    onCustom: Function as PropType<HelloWorldEvents['onCustom']>,
    vSlots: Object as PropType<{
      default: () => string,
    }>,
  },
  emits: {
    custom: (args: string) => typeof args === 'string',
  },
  render,
  setup,
});

export default HelloWorld;
