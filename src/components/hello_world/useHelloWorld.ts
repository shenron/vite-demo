import { computed, SetupContext } from 'vue';
import type { Props, Events } from './HelloWorld';

export default function useHelloWorld(props: Props, { emit }: SetupContext<Events>) {
  const newMsg = computed(() => `${props.msg} + Vite + TSX`);

  const onCustomClick = (v: string) => emit('customClick', v);

  return {
    newMsg,
    onCustomClick,
  };
}
