import { defineComponent } from 'vue';
import render from './useRender';
import useBar from './useBar';

export type Props = {
  msg: string
}

export type Bar = {
  msg: string
}

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  render,
  setup(props) {
    return useBar(props);
  },
});
