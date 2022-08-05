import { defineComponent } from 'vue';
import CustomButton from '@/components/CustomButton';
import Foo from '../foo/FooBar.vue';

export default defineComponent({
  components: {
    Foo,
    CustomButton,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const onCustomClick = (msg: string) => console.log(msg);

    return {
      onCustomClick,
    };
  },
});
