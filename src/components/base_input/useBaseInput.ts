import { SetupContext } from 'vue';
import type { Props, Events } from './BaseInput';

export default function useBaseInput(props: Props, { emit }: SetupContext<Events>) {
  const onInput = (e: Event) => {
    emit('update:modelValue', (e?.target as HTMLInputElement)?.value);
  };

  return {
    onInput,
  };
}
