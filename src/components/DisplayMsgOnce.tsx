import { defineComponent, ExtractPropTypes } from 'vue';
import useMemo from '@/compositions/useMemo';
import { Context } from '@/definitions/getContextValues';

const props = {
  msg: String,
} as const;

type Props = ExtractPropTypes<typeof props>;

const setup = (p: Props) => {
  const memo = useMemo();

  const msgMemo = memo(() => [p.msg]);

  const msgOnceMemo = memo();

  return {
    msgMemo,
    msgOnceMemo,
  };
};

type DisplayMsgOnce = Context<typeof setup, Props>;

export default defineComponent({
  name: 'DisplayMsgOnce',
  props,
  setup,
  render(c: DisplayMsgOnce) {
    const { msgMemo, msgOnceMemo } = c;

    return (
      <ul>
        <li>
          <small>v-once:</small>
          {' '}
          {msgOnceMemo(<span>{c.msg}</span>)}
        </li>
        <li>
          <small>v-memo:</small>
          {' '}
          {msgMemo(<span>{c.msg}</span>)}
        </li>
      </ul>
    );
  },
});
