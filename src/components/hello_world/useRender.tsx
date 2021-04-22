import type { HelloWorld } from './HelloWorld';

export default function (cmp: HelloWorld) {
  return <>
    <p>{cmp.msg} {cmp.newMsg}</p>
    <button onClick={cmp.click}>
      Emit Custom Event
    </button>

    <div style='margin-top: 3px;'>
      {cmp.$slots?.default?.({})}
    </div>
  </>;
}
