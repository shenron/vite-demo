import { defineComponent } from 'vue';
import WithTemplate from '@/components/with_template/WithTemplate.vue';
import setup from './useApp';
import render from './useRender';

export default defineComponent({
  components: {
    WithTemplate,
  },
  name: 'App',
  render,
  setup,
});
