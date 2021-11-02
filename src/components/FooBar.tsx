import { defineComponent } from 'vue';

// named exports w/ variable declaration: ok
export const FooBar = defineComponent({
  name: 'FooBar',
  setup: () => () => <div class="jsx">from JSX</div>,
});
