import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/hello_world/HelloWorld';

describe('HelloWorld', () => {
  it('should display header text', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Vue 3.0',
      },
    });

    expect(wrapper.find('p').text()).toEqual('Vue 3.0 + Vite + TSX');
  });
});
