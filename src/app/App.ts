import { defineComponent } from 'vue';
import useRender from './useRender';
import WithTemplate from '/@/components/with_template/WithTemplate.vue';

export default defineComponent({
  components: {
    WithTemplate,
  },
  name: 'App',
  render(h: any) {
    return useRender.call(this, h);
  },
});
