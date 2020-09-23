import type { HelloWorld } from './HelloWorld';

export default function (h: any, props: HelloWorld) {
  return (
    <div>
      {props.msg} {props.newMsg}
    </div>
  );
}
