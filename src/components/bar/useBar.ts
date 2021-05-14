import type { Bar } from './Bar';

export default function (context: Bar) {
  console.log(context.msg);

  return {};
}
