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
    onCustomClick: Function as PropType<HelloWorldEvents['onCustomClick']>,
    vSlots: Object as PropType<{
      default: () => string,
    }>,
  },
  emits: {
    // display warning at runtime
    'custom-click': (args: string) => typeof args === 'string',
  },
  render,
  setup,
});
