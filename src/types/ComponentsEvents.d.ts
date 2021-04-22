import { HelloWorldEvents } from '@/components/hello_world/HelloWorld';

type Func = ((this: any, ...args: any[]) => any | void);

interface CustomProps {
  vSlots: { [id: string]: Func },
}

// will be imported by "vue-ts-shim.d.ts"
export default interface ComponentsEvents extends
  CustomProps,
  HelloWorldEvents {

}
