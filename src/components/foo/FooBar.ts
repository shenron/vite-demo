import type { PropType, VNode } from 'vue';
import { defineComponent } from 'vue';
import type { ExternalProps } from '@/definitions/getContextValues';

const props = {
  vSlots: Object as PropType<Partial<{
    default: () => undefined | null | VNode;
  }>>,
} as const;

export type Props = ExternalProps<typeof props>;

export default defineComponent({
  name: 'FooBar',
  props,
});
