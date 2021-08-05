import { defineComponent } from 'vue';
import { Context } from '@/definitions/getContextValues';
import render from './useRender';
import setup from './useBar';

export type Props = {
  msg: string
}

export type Bar = Context<ReturnType<typeof setup>, Props>;

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  render,
  setup,
});
