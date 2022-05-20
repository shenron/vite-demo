import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyButton',
  setup() {
    return () => <button>My Super Button</button>;
  },
});
