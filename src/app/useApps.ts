import { ref } from 'vue';

export default function () {
  const v = ref('initial value');

  return {
    v,
  };
}
