import type { ExtractPropTypes, PropType } from 'vue';
import { h } from 'vue';
import type { FunctionalContext } from '@/definitions/vue';

const emits = {
  click: (e: MouseEvent) => !!e,
} as const;

const props = {
  title: String,
  href: String,
  class: [Object, String, Array] as PropType<string | Array<Partial<{}> | string>>,
} as const;

type Props = ExtractPropTypes<typeof props>

// tsx as extension to be used by tailwind purge
const BaseLink = (p: Props, context: FunctionalContext) => h(
  'a',
  {
    onClick: (e: MouseEvent) => () => console.log('click', e),
    href: p?.href || '#',
    title: p?.title || '',
    ...context.attrs,
    class: [
      context.attrs?.class,
    ],
  },
  context.slots,
);

BaseLink.props = props;
BaseLink.emits = emits;

export default BaseLink;
