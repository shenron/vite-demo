import { Context } from '@/types/context.d';
import type setup from './useHelloWorld';

export type Props = {
  msg?: string,
};

export type HelloWorldEvents = {
  // eslint-disable-next-line no-unused-vars
  onCustom: (s: string) => void,
};

export type HelloWorld = Context<ReturnType<typeof setup>> & Props;
