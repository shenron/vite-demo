import { VNode } from 'vue';
import type { Bar } from './Bar';

export default function useRender(context: Bar): VNode {
  return <h1>{context.msg}</h1>;
}
