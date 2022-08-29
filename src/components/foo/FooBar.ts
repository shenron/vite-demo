import { defineComponent, PropType, VNode } from 'vue';
import { ExternalProps } from '@/definitions/getContextValues';

const props = {
  vSlots: Object as PropType<Partial<{
    default: () => undefined | null | VNode
  }>>,
} as const;

export type Props = ExternalProps<typeof props>;

export default defineComponent({
  name: 'FooBar',
  props,
});
