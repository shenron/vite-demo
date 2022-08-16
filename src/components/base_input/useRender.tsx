import type { BaseInput } from './BaseInput';

export default function useRender(c: BaseInput) {
  return (
    <input
      type="text"
      {...c.$attrs}
      onInput={c.onInput}
      value={c.modelValue}
    />
  );
}
