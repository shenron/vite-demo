import { VNode, withMemo } from 'vue';

export default function () {
  const cache: unknown[] = [];

  let i = -1;

  return (memo: any[]) => {
    i += 1;

    const render = (index: number, toRender: () => VNode<any, any>) => {
      const r = withMemo(memo, toRender, cache, index);
      cache[i] = r;

      return r;
    };

    return render.bind(null, i);
  };
}
