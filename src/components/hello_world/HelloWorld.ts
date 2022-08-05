import { defineComponent, PropType, VNode } from 'vue';
import type { Context, ExternalProps } from '@/definitions/getContextValues';
import { emits, Events as $Events } from '../CustomButton';
import setup from './useHelloWorld';
import render from './useRender';

const props = {
  vSlots: Object as PropType<Partial<{
    default: () => null | string | VNode | VNode[],
  }>>,
  msg: {
    type: String,
    default: () => '',
  },
} as const;

export type Props = ExternalProps<typeof props>;

export type HelloWorld = Context<typeof setup, Props>;

export type Events = $Events;

export default defineComponent({
  name: 'HelloWorld',
  inheritAttrs: false,
  props,
  emits,
  render,
  setup,
});
