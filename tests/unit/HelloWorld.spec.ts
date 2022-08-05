import { shallowMount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import HelloWorld from '@/components/hello_world/HelloWorld';

test('mount HelloWorld component', () => {
  const wrapper = shallowMount(HelloWorld, {
    props: {
      msg: 'Vue 3.0',
    },
  });

  expect(wrapper.find('p').text()).toEqual('Vue 3.0 + Vite + TSX');
});
