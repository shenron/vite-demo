import type { RouterLinkProps as $RouterLinkProps, UseLinkReturn } from 'vue-router';
import type { UnwrapRef } from 'vue';
import type { SlotNode } from '@taz-rex/vue-widgets';

declare module 'vue-router' {
  export * from 'vue-router/dist/vue-router.d';

  export declare interface RouterLinkProps extends $RouterLinkProps {
    onClick?: (e: Event) => unknown;
    vSlots?: Partial<{
      default: ({
        route, href, isActive, isExactActive, navigate,
      }: UnwrapRef<UseLinkReturn>) => SlotNode;
    }>
  }
}
