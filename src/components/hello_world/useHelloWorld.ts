import { computed, ref, SetupContext } from 'vue';
import type { HelloWorldEvents, Props } from './HelloWorld';

export default function (props: Props, { emit }: SetupContext<{
  custom: HelloWorldEvents['onCustom']
}>) {
  const click = () => emit('custom', 'a click');

  return {
    click,
    count: ref<number>(0),
    newMsg: computed(() => `${props.msg} Hey`),
  };
}
