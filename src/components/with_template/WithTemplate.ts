import { defineComponent, ref } from 'vue';
import Parent from '@/_base/Parent';

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const dto = ref(new Parent({
      childMsg: 'childMsg'
    }));

    return {
      dto,
    };
  },
});
