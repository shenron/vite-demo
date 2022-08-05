import { shallowMount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import WithTemplateCmp from '@/components/with_template/WithTemplate.vue';

test('mount WithTemplate component', () => {
  expect(WithTemplateCmp).toBeTruthy();

  // @ts-ignore - TODO how to fix this ts error?
  const wrapper = shallowMount(WithTemplateCmp, {
    props: {
      msg: 'Vue 3.0',
    },
  });

  expect(wrapper.find('p').text()).toEqual('Hello (Vue 3.0)  from .vue template');
});
