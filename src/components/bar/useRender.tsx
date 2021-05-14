import type { Bar } from './Bar';

export default function (context: Bar) {
  return <h1>{context.msg}</h1>;
}
