import 'vue';

import ComponentsEvents from '@/types/ComponentsEvents';

declare module 'vue' {
  // should be removed after Vue supported component events typing
  // see: https://github.com/vuejs/vue-next/issues/1553
  //      https://github.com/vuejs/vue-next/issues/3029
  interface ComponentCustomProps extends ComponentsEvents {
  }
}
