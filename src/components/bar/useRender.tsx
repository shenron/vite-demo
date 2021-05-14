import { VNode } from 'vue';
import type { Bar } from './Bar.d';

export default function (context: Bar): VNode {
  return <h1>{context.msg}</h1>;
}
