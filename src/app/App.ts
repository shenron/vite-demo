import { defineComponent, ref } from 'vue';
import WithTemplate from '@/components/with_template/WithTemplate.vue';
import useRender from './useRender';

export default defineComponent({
  components: {
    WithTemplate,
  },
  name: 'App',
  render() {
    return useRender.call(this, this);
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
