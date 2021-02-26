import { withModifiers, h } from 'vue';
import HelloWorld from '@/components/hello_world/HelloWorld';
import logo from '@/assets/logo.png';

export default function (context: any) {
  return [
    <img alt="Vue logo" src={logo} />,

    <with-template msg="Oh yes" />, // WithTemplate is a .vue single component, mix on tsx default template make ts lint angry

    <HelloWorld msg="Hello Vue 3.0 + Vite"
      onCustom={(str: string) => console.log(str)} />,

    <button onClick={withModifiers(() => {
      console.log('clicked');
    }, ['stop'])}>Click me</button>,

    <input type='text' v-model={context.v} />, context.v,
  ];
}
