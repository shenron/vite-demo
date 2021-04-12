import type { HelloWorld } from './HelloWorld';

export default function (cmp: HelloWorld) {
  return (
    <div>
      {cmp.msg} {cmp.newMsg}
      <button onClick={cmp.click}>
        Emit event
      </button>

      {cmp.$slots.default ? cmp.$slots.default({}) : null}
    </div>
  );
}
