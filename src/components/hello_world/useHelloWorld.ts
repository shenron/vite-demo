import { computed, ref, SetupContext } from 'vue';
import type { Props } from './HelloWorld';

export default function (props: Props, { emit }: SetupContext) {
  const click = () => {
    emit('custom', 'custom clicked');
  };

  return {
    click,
    count: ref<number>(0),
    newMsg: computed(() => `${props.msg} Hey`),
  };
}
