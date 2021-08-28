import { computed, ref, SetupContext } from 'vue';
import { wrap } from 'comlink';

// @ts-ignore - worker import
import MyWorker from '@/utils.worker?worker';

import type { WObj } from '@/utils.worker';
import type { Props } from './HelloWorld';

type Context = SetupContext<{
  // lint when call emit with 'custom'
  'custom-click': Props['onCustomClick']
}>;

export default function (props: Props, { emit }: Context) {
  const worker = new MyWorker();
  const obj = wrap<WObj>(worker);

  // ask a webworker to do an addition :)
  const click = async () => {
    await obj.inc();
    emit('custom-click', `custom event value: ${await obj.counter}`);
  };

  return {
    click,
    count: ref<number>(0),
    newMsg: computed(() => `${props.msg} + Vite + TSX`),
  };
}
