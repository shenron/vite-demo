import { defineComponent, PropType, VNode } from 'vue';
import type { Context } from '@/definitions/getContextValues';
import setup from './useHelloWorld';
import render from './useRender';

export type HelloWorldEvents = {
  onCustomClick: (s: string) => void,
};

export type Props = {
  vSlots?: Partial<{
    default: () => null | string | VNode | VNode[],
  }>,
  onCustomClick: HelloWorldEvents['onCustomClick'],
  msg?: string,
};

export type HelloWorld = Context<ReturnType<typeof setup>, Props>;

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: () => '',
      required: false,
    },

    // fix parent tsc lint
    onCustomClick: {
      type: Function as PropType<HelloWorldEvents['onCustomClick']>,
      default: () => {},
    },

    vSlots: Object as PropType<Props['vSlots']>,
  },
  emits: {
    // display warning at runtime
    'custom-click': (args: string) => typeof args === 'string',
  },
  render,
  setup,
});
