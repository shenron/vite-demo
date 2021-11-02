import { defineComponent } from 'vue';
import Foo from '../foo/FooBar.vue';

export default defineComponent({
  components: {
    Foo,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
});
