import { computed, SetupContext } from 'vue';
import type { Events, Props } from './HelloWorld';

export default function (props: Props, { emit }: SetupContext<Events>) {
  const click = () => emit('custom-click', 'custom event value');

  return {
    click,
    newMsg: computed(() => `${props.msg} + Vite + TSX`),
  };
}
