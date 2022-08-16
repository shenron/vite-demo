import { ref } from 'vue';

export default function useApp() {
  const v = ref('initial value');

  return {
    v,
  };
}
