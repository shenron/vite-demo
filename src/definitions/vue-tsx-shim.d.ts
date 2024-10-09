import type { GlobalComponentsEvents } from 'vue';

declare module 'vue' {
  // should be removed after Vue supported component events typing
  // see: https://github.com/vuejs/vue-next/issues/1553
  //      https://github.com/vuejs/vue-next/issues/3029
  interface ComponentCustomProps extends GlobalComponentsEvents {
  }
}
