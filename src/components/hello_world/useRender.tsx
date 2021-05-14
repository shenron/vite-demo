import { VNode } from 'vue';
import type { HelloWorld } from './HelloWorld.d';

export default function (cmp: HelloWorld): VNode {
  return <>
    <p>{cmp.newMsg}</p>
    <div style="cursor: pointer; background-color: black; color: white;" onClick={cmp.click}>
      Emit Custom Event
    </div>

    <div style="margin-top: 3px;">
      {cmp.$slots?.default?.({})}
    </div>
  </>;
}
