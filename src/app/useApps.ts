import { ref } from 'vue';

export default function () {
  const v = ref('Hello');

  return {
    v,
  };
}
