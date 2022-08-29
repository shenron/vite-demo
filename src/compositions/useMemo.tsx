import { VNode, withMemo } from 'vue';

export default function useMemo() {
  const cache: unknown[] = [];

  let i = -1;

  return (memo: () => unknown[] = () => []) => {
    i += 1;

    const render = (index: number, toRender: VNode<any, any>) => {
      const r = withMemo(memo(), () => toRender, cache, index);

      if (cache.indexOf(r) !== index) {
        console.error('withMemo cache has been corrupted');
      }

      return r;
    };

    return render.bind(null, i);
  };
}
