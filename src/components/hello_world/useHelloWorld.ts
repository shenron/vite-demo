import { computed, ref, SetupContext } from 'vue';
import type { HelloWorldEvents, Props } from './HelloWorld';

type Context = SetupContext<{
  // lint when call emit with 'custom'
  custom: HelloWorldEvents['onCustom']
}>;

export default function (props: Props, { emit }: Context) {
  const click = () => emit('custom', 'custom event value');

  return {
    click,
    count: ref<number>(0),
    newMsg: computed(() => `${props.msg} + Vite + TSX`),
  };
}
