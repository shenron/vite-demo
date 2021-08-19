import { computed, ref, SetupContext } from 'vue';

// @ts-ignore - worker import
import MyWorker from '@/utils.worker?worker';
import type { WObj } from '@/utils.worker';

import { wrap } from 'comlink';
import type { Props } from './HelloWorld';

type Context = SetupContext<{
  // lint when call emit with 'custom'
  'custom-click': Props['onCustomClick']
}>;

export default function (props: Props, { emit }: Context) {
  const click = () => emit('custom-click', 'custom event value');

  const init = async () => {
    const worker = new MyWorker();
    const obj = wrap<WObj>(worker);
    console.log(`Counter: ${await obj.counter}`);
    await obj.inc();
    console.log(`Counter: ${await obj.counter}`);
  };
  init();

  return {
    click,
    count: ref<number>(0),
    newMsg: computed(() => `${props.msg} + Vite + TSX`),
  };
}
