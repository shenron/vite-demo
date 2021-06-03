import { defineComponent, PropType } from 'vue';
import type { HelloWorldEvents } from './HelloWorld.d';
import setup from './useHelloWorld';
import render from './useRender';

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
