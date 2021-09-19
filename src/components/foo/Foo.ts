import { defineComponent, PropType, VNode } from 'vue';

export type Props = {
  vSlots?: Partial<{
    default: () => undefined | null | VNode
  }>
}

export default defineComponent({
  props: {
    vSlots: Object as PropType<Props['vSlots']>,
  },
});
