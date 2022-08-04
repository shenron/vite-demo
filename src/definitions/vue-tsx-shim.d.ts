import 'vue';

// eslint-disable-next-line import/no-unresolved,import/extensions

declare module 'vue' {
  // should be removed after Vue supported component events typing
  // see: https://github.com/vuejs/vue-next/issues/1553
  //      https://github.com/vuejs/vue-next/issues/3029
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ComponentCustomProps extends GlobalComponentsEvents {
  }
}
