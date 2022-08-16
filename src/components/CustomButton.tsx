import { defineComponent, SetupContext, withModifiers } from 'vue';
import type { Emits } from '@/definitions/getContextValues';

const preventDefault = withModifiers(() => {}, ['stop', 'prevent']);

export const emits = {
  customClick: (args: string) => typeof args === 'string',
} as const;

export type Events = Emits<typeof emits>;

export default defineComponent({
  name: 'CustomButton',
  emits,
  setup(p, { emit }: SetupContext<Events>) {
    const onClick = () => emit('customClick', 'custom event value');

    return () => (
      <div
        style={{ cursor: 'pointer', 'background-color': 'black', color: 'white' }}
        onClick={onClick}
        onKeypress={preventDefault}
        role="button"
        tabindex={0}
      >
        Emit Custom Event
      </div>
    );
  },
});
