import { defineComponent } from 'vue';
import type { Context, Emits, ExternalProps } from '@/definitions/getContextValues';
import render from './useRender';
import setup from './useBaseInput';

const emits = {
  'update:modelValue': (v: string) => v !== undefined,
} as const;

export type Events = Emits<typeof emits>;

const props = {
  modelValue: String,
} as const;

export type Props = ExternalProps<typeof props>;

export type BaseInput = Context<typeof setup, Props>;

export default defineComponent({
  name: 'BaseInput',
  inheritAttrs: false,
  props,
  emits,
  setup,
  render,
});
