import { createApp, defineComponent } from 'vue';
import MyButton from 'mybutton';

const AnOtherButton = defineComponent({
  name: 'MyButton',
  render() {
    return <button>An Other Button</button>;
  },
});

createApp(<>
  <MyButton class="a-super-class" />

  <AnOtherButton class="a-super-class" />
</>).mount('#app');
