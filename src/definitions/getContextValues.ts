import { Ref, SetupContext } from 'vue';

type Unwrap<T> = T extends Ref<infer U> ? U : T

type Slots = Partial<{
  default: (...args: unknown[]) => unknown,
  [id: string]: (...args: unknown[]) => unknown,
}>

type RemoveReadonly<T> = {
  -readonly [P in keyof T]: T[P];
};

export type Emits <T extends ReadonlyArray<any>> = RemoveReadonly<T>;

export type Context<T, Z extends {
  vSlots?: Slots
} | unknown = Partial<{ vSlots?: Slots }>> = SetupContext & {
  [P in keyof T]: Unwrap<T[P]>
} & {
  listeners: { [id: string]: (args?: any) => any },
  $attrs: Record<string, unknown>,
  $slots: Z extends { vSlots?: Slots } ? Z['vSlots'] : undefined,
  $emit: SetupContext['emit'],
} & Omit<Z, 'vSlots'>;
