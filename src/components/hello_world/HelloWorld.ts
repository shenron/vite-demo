import { defineComponent } from 'vue';
import { Context } from '@/types/context';
import setup from './useHelloWorld';
import render from './useRender';

export type Props = {
  msg?: string,
};

export type HelloWorld = Context<ReturnType<typeof setup>> & Props;

export interface HelloWorldEvents {
  onCustom(s: string): void,
}

const HelloWorld = defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: () => '',
      required: false,
    },
  },
  emits: {
    custom: (args: string) => typeof args === 'string',
  },
  render,
  setup,
});

export default HelloWorld;
