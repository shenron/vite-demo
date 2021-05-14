import type { Bar } from './Bar.d';

export default function (context: Bar) {
  console.log(context.msg);

  return {};
}
