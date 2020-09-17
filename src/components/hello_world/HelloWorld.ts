import { defineComponent, ref } from 'vue';
import useRender from './useRender';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  render (h: any) {
    return useRender.call(this, h, this);
  },
  setup () {
    return {
      count: ref<number>(0),
    };
  },
});
