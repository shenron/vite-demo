import { defineComponent, ExtractPropTypes } from 'vue';
import useMemo from '@/compositions/useMemo';
import { Context } from '@/definitions/getContextValues';

const props = {
  msg: String,
} as const;

type Props = ExtractPropTypes<typeof props>;

const setup = (p: Props) => {
  const memo = useMemo();

  return {
    msgOnceMemo: memo([]),
    msgMemo: memo([p.msg]),
  };
};

type DisplayMsgOnce = Context<typeof setup, Props>

export default defineComponent({
  name: 'DisplayMsgOnce',
  props,
  setup,
  render(c: DisplayMsgOnce) {
    const { msgMemo, msgOnceMemo } = c;

    const msgOnce = msgOnceMemo(() => <span>{c.msg}</span>);

    const msg = msgMemo(() => <span>{c.msg}</span>);

    return (
      <ul>
        <li>{msgOnce}</li>
        <li>{msg}</li>
      </ul>
    );
  },
});
