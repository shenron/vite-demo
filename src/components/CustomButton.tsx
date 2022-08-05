import { defineComponent } from 'vue';
import type { Emits } from '@/definitions/getContextValues';

export const emits = {
  customClick: (args: string) => typeof args === 'string',
} as const;

export type Events = Emits<typeof emits>;

export default defineComponent({
  name: 'CustomButton',
  emits,
  setup(p, { emit }) {
    const onClick = () => emit('customClick', 'custom event value');

    return () => (
      <div style="cursor: pointer; background-color: black; color: white;" onClick={onClick}>
        Emit Custom Event
      </div>
    );
  },
});
