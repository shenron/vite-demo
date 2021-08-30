import { shallowMount } from '@vue/test-utils';
import WithTemplateCmp from '@/components/with_template/WithTemplate.vue';
import WithTemplate from '@/components/with_template/WithTemplate';

describe('HelloWorld', () => {
  it('should display header text', () => {
    const wrapper = shallowMount(WithTemplateCmp as typeof WithTemplate, {
      props: {
        msg: 'Vue 3.0',
      },
    });

    expect(wrapper.find('p').text()).toEqual('Hello Vue 3.0');
  });
});
