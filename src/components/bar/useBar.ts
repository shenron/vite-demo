import type { Props } from './Bar';

export default function useBar(c: Props) {
  console.log(c.msg);

  return {};
}
