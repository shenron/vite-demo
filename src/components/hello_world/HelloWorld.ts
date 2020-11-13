import {
  defineComponent,
} from 'vue';
import useHelloWorld from './useHelloWorld';
import useRender from './useRender';

export type Props = {
  msg: string,
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
  render(h: any) {
    return useRender.call(this, h, this as unknown as HelloWorld);
  },
  emits: {
    custom: (str: string) => typeof str === 'string',
  },
  setup(props, context) {
    return {
      ...useHelloWorld(props, { emit: context.emit }),
    };
  },
});
