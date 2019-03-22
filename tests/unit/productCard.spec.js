import { shallowMount, mount } from '@vue/test-utils';
import productCard from '@/components/productCard.vue';

describe('productCard.vue', () => {
  it('renders a div', () => {
    const product = {
      name: 'test',
      amount: '45000',
    };

    const wrapper = shallowMount(productCard, {
      attachToDocument: true,
      propsData: { product },
    });

    expect(wrapper.contains('div')).toBe(true);
  });

  it('renders props.product when passed', () => {
    const product = {
      name: 'test',
      amount: '45000',
    };
    const wrapper = shallowMount(productCard, {
      propsData: { product },
    });
    expect(wrapper.props().product.name).toBe('test');
  });

  it('goes to correct path', () => {
    const product = {
      name: 'test',
      amount: '45000',
    };

    const $route = { path: '/' };
    const wrapper = shallowMount(productCard, {
      mocks: {
        $route,
      },
      propsData: { product },
    });
    expect(wrapper.vm.$route.path).toBe($route.path);
  });

  it('renders an image', () => {
    const product = {
      name: 'test',
      amount: '45000',
    };

    const wrapper = shallowMount(productCard, {
      propsData: { product },
    });
    expect(wrapper.findAll('v-img').exists()).toBe(true);
  });
});
