import { computed, SetupContext } from 'vue';
import type { Events, Props } from './HelloWorld';

export default function (props: Props, { emit }: SetupContext<Events>) {
  const onClick = () => emit('click', 'custom event value');

  const newMsg = computed(() => `${props.msg} + Vite + TSX`);

  return {
    onClick,
    newMsg,
  };
}
