import HelloWorld from '/@/components/hello_world/HelloWorld';
import WithTemplate from '/@/components/with_template/WithTemplate.vue';
import logo from '/@/assets/logo.png';

export default function (h: any) {
  return [
    <img alt="Vue logo" src={logo} />,
    <WithTemplate msg="Oh yes" />,
    <HelloWorld msg="Hello Vue 3.0 + Vite" />,
  ];
}
