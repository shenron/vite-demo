import type { HelloWorld } from './HelloWorld';

export default function (cmp: HelloWorld) {
  return <>
    <p>{cmp.newMsg}</p>

    <div style="cursor: pointer; background-color: black; color: white;" onClick={cmp.click}>
      Emit Custom Event
    </div>

    <div style="margin-top: 3px;">
      {cmp.$slots?.default?.()}
    </div>
  </>;
}
