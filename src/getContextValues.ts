import { Ref, SetupContext } from 'vue';

type Unwrap<T> = T extends Ref<infer U> ? U : T;

export type Context<T> = {
  [P in keyof T]: Unwrap<T[P]>
};

export type $Context<T> = Context<T> & SetupContext;
