import { Context } from '@/types/context.d';
import type setup from './useHelloWorld';

export type Props = {
  msg?: string,
};

export type HelloWorldEvents = {
  onCustomClick: (s: string) => void,
};

export type HelloWorld = Context<ReturnType<typeof setup>> & Props;
