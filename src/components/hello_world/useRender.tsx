import type { HelloWorld, h } from './HelloWorld';

export default function (props: HelloWorld) {
  return (
    <div>
      {props.msg} {props.newMsg}
      <button onClick={props.click}>
        Emit event
      </button>
    </div>
  );
}
