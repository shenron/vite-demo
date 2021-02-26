import type { HelloWorld } from './HelloWorld';

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
