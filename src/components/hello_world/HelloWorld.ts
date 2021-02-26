import {
  defineComponent,
} from 'vue';
import useHelloWorld from './useHelloWorld';
import useRender from './useRender';

export type Props = {
  msg?: string,
};

export type HelloWorld = ReturnType<typeof useHelloWorld> & Props;

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  render() {
    return useRender.call(this, this as unknown as HelloWorld);
  },
  emits: {
    custom: (args: unknown) => typeof args === 'string',
  },
  setup(props, { emit }) {
    return {
      ...useHelloWorld(props, { emit }),
    };
  },
});
