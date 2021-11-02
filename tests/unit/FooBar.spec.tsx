import { mount } from '@vue/test-utils';
import { FooBar } from '@/components/FooBar';

describe('HelloWorld', () => {
  it('should display header text', () => {
    const wrapper = mount(FooBar);

    expect(wrapper.text()).toEqual('from JSX');
  });
});
