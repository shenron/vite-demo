import 'vue';

declare module 'vue' {
  type Func = ((this: any, ...args: any[]) => any | void);

  interface ComponentCustomProps {
    // should be removed after Vue supported component events typing
    // see: https://github.com/vuejs/vue-next/issues/1553
    //      https://github.com/vuejs/vue-next/issues/3029
    onCustom: (s: string) => void;
    vSlots: {[id: string]: Func},
  }
}
