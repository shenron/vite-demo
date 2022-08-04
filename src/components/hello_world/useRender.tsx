import type { HelloWorld } from './HelloWorld';

export default function (cmp: HelloWorld) {
  return (
    <div>
      <p>{cmp.newMsg}</p>

      <div style="cursor: pointer; background-color: black; color: white;" onClick={cmp.onClick}>
        Emit Custom Event
      </div>

      <div style="margin-top: 3px;">
        {cmp.$slots?.default?.()}
      </div>
    </div>
  );
}
