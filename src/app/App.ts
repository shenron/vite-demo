import { defineComponent } from 'vue';
import useRender from './useRender';

export default defineComponent({
  name: 'App',
  render(h: any) {
    return useRender.call(this, h, this);
  },
});
