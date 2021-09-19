import { defineComponent } from 'vue';
import Foo from '../foo/Foo.vue';

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
