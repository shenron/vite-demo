import { Ref, Slots } from 'vue';

type Unwrap<T> = T extends Ref<infer U> ? U : T;

export type Context<T> = {
  [P in keyof T]: Unwrap<T[P]>
} & {
  $attrs: Record<string, unknown>,
  $slots: Slots,
};

export type $Context<T> = Context<T>;
