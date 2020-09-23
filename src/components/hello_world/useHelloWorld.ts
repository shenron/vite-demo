import { computed, ref } from 'vue';
import type { Props } from './HelloWorld';

export default function (props: Props) {
  return {
    count: ref<number>(0),
    newMsg: computed(() => `${props.msg} Hey`),
  };
}
