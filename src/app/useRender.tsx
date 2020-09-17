import HelloWorld from '/@/components/hello_world/HelloWorld';
import logo from '/@/assets/logo.png';

export default function (h: any, context: any) {
  return [
    <img alt="Vue logo" src={ logo } />,
    <HelloWorld msg="Hello Vue 3.0 + Vite" />,
  ];
}
