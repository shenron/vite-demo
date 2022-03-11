import { defineComponent } from 'vue';
import { Context, ExternalProps } from '@/definitions/getContextValues';
import render from './useRender';
import setup from './useBar';

const props = {
  msg: {
    type: String,
    required: true,
  },
} as const;

export type Props = ExternalProps<typeof props>;

export type Bar = Context<typeof setup, Props>;

export default defineComponent({
  props,
  render,
  setup,
});
