import 'vue';

import { HelloWorldEvents } from '@/components/hello_world/HelloWorld';

type Func = ((this: any, ...args: any[]) => any | void);

interface CustomProps {
  vSlots: { [id: string]: Func },
}

declare module 'vue' {
  // should be removed after Vue supported component events typing
  // see: https://github.com/vuejs/vue-next/issues/1553
  //      https://github.com/vuejs/vue-next/issues/3029
  interface ComponentCustomProps extends HelloWorldEvents, CustomProps {
  }
}
