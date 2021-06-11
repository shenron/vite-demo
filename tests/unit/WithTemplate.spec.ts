import { shallowMount } from '@vue/test-utils';
import WithTemplate from '@/components/with_template/WithTemplate.vue';

describe('HelloWorld', () => {
  it('should display header text', () => {
    const wrapper = shallowMount(WithTemplate, {
      props: {
        msg: 'Vue 3.0',
      },
    });

    expect(wrapper.find('p').text()).toEqual('Hello Vue 3.0');
  });
});
