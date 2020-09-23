import HelloWorld from '/@/components/hello_world/HelloWorld';
import logo from '/@/assets/logo.png';

export default function (h: any) {
  return [
    <img alt="Vue logo" src={logo} />,
    <with-template msg="Oh yes" />, // WithTemplate is a .vue single component, mix on tsx default template make tsconfig angry
    <HelloWorld msg="Hello Vue 3.0 + Vite" />,
  ];
}
