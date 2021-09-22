import { computed, ref, SetupContext } from 'vue';
import type { HelloWorldEvents, Props } from './HelloWorld';

type Context = SetupContext<HelloWorldEvents>;

export default function (props: Props, { emit }: Context) {
  const click = () => emit('custom-click', 'custom event value');

  return {
    click,
    count: ref<number>(0),
    newMsg: computed(() => `${props.msg} + Vite + TSX`),
  };
}
