import { defineComponent, PropType, VNode } from 'vue';
import type { Context, Emits, ExternalProps } from '@/definitions/getContextValues';
import setup from './useHelloWorld';
import render from './useRender';

const emits = {
  'custom-click': (args: string) => typeof args === 'string',
} as const;

const props = {
  vSlots: Object as PropType<Partial<{
    default: () => null | string | VNode | VNode[],
  }>>,
  msg: {
    type: String,
    default: () => '',
  },
} as const;

export type Events = Emits<typeof emits>;

export type Props = ExternalProps<typeof props>;

export type HelloWorld = Context<typeof setup, Props>;

export default defineComponent({
  name: 'HelloWorld',
  props,
  emits,
  render,
  setup,
});
