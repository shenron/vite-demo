import { defineComponent } from 'vue';
import WithTemplate from '@/components/with_template/WithTemplate.vue';
import { Context } from '@/getContextValues';
import useApp from './useApps';
import useRender from './useRender';

export type App = Context<ReturnType<typeof useApp>>;

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
      ...useApp(),
    };
  },
});
