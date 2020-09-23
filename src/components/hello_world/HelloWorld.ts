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
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  render(h: any) {
    return useRender.call(this, h, this as unknown as HelloWorld);
  },
  setup(props) {
    return {
      ...useHelloWorld(props),
    };
  },
});
