import { mount } from '@vue/test-utils';
import { Foo } from '../../src/components/Foo';

describe('HelloWorld', () => {
  it('should display header text', () => {
    const wrapper = mount(Foo);

    expect(wrapper.text()).toEqual('from JSX');
  });
});
