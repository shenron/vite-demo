import { defineComponent, ref } from 'vue';
import useRender from './useRender';
import WithTemplate from '/@/components/with_template/WithTemplate.vue';

export default defineComponent({
  components: {
    WithTemplate,
  },
  name: 'App',
  render(h: any) {
    return useRender.call(this, h, this);
  },
  emits: {
    'on-custom': (str: string) => {
      if (!str) {
        console.warn('invalid message');
        return false;
      }
      return true;
    },
  },
  setup() {
    return {
      v: ref<string>('hello'),
    };
  },
});
