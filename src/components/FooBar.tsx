import { defineComponent } from 'vue';

export const FooBar = defineComponent({
  name: 'FooBar',
  setup: () => () => <div class="jsx">from JSX</div>,
});
