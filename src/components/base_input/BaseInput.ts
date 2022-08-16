import { defineComponent } from 'vue';
import type { Context, Emits, ExternalProps } from '@/definitions/getContextValues';
import render from './useRender';
import setup from './useBaseInput';

const emits = ['update:modelValue'] as const;

export type Events = Emits<typeof emits>;

const props = {
  // v-model declared as Props is to be able to use `v-model` on tsx with check
  'v-model': String,
  modelValue: String,
};

export type Props = ExternalProps<typeof props>;

export type BaseInput = Context<typeof setup, Props>;

export default defineComponent({
  inheritAttrs: false,
  props,
  emits: emits as Events,
  render,
  setup,
});
