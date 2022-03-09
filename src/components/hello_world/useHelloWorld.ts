import { computed, SetupContext } from 'vue';
import type { HelloWorldEvents, Props } from './HelloWorld';

type Context = SetupContext<HelloWorldEvents>;

export default function (props: Props, { emit }: Context) {
  const click = () => emit('custom-click', 'custom event value');

  return {
    click,
    newMsg: computed(() => `${props.msg} + Vite + TSX`),
  };
}
