import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { FooBar } from '@/components/FooBar';

test('HelloWorld', () => {
  const wrapper = mount(FooBar);

  expect(wrapper.text()).toEqual('from JSX');
});
