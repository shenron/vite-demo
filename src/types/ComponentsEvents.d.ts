import { HelloWorldEvents } from '@/components/hello_world/HelloWorld';

type Func = ((this: any, ...args: any[]) => any | void);

interface CustomProps {
  vSlots: { [id: string]: Func },
}

export default interface ComponentsEvents extends CustomProps, HelloWorldEvents {

}
