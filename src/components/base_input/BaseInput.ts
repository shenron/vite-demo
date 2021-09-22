import { defineComponent, PropType } from 'vue';
import type { Context, Emits } from '@/definitions/getContextValues';
import render from './useRender';
import setup from './useBaseInput';

export type Props = {
  vModel?: string
  modelValue?: string
}

export type BaseInput = Context<ReturnType<typeof setup>, Props>

const emits = ['update:modelValue'] as const;

export type Events = Emits<typeof emits>

export default defineComponent({
  inheritAttrs: false,
  emits: emits as Events,
  props: {
    // vModel declared as Props is to be able to use `vModel` on tsx with check
    vModel: String as PropType<Props['vModel']>,
    modelValue: String as PropType<Props['vModel']>,
  },
  render,
  setup,
});
