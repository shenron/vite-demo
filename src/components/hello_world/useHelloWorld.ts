import { computed, ref, SetupContext } from 'vue';
import type { Props } from './HelloWorld';

type Context = {
  emit: SetupContext<{ custom: null; }>['emit'],
}

export default function (props: Props, { emit }: Context) {
  const click = () => {
    emit('custom', 10);
  };

  return {
    click,
    count: ref<number>(0),
    newMsg: computed(() => `${props.msg} Hey`),
  };
}
