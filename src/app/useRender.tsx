import { withModifiers } from 'vue';
import HelloWorld from '@/components/hello_world/HelloWorld';
import logo from '@/assets/logo.png';
import { App } from '@/app/App';

export default function (context: App) {
  return [
    <img alt="Vue logo" src={logo} />,

    // WithTemplate is a .vue single component, mix on tsx default template make ts lint angry
    <with-template msg="Oh yes" />,

    <HelloWorld
      msg="Hello Vue 3.0 + Vite"
      // @ts-ignore - impossible to valid `onCustom`
      onCustom={(str: string) => console.log(str)} />,

    <button onClick={withModifiers(() => {
      console.log('clicked');
    }, ['stop'])}>Click me</button>,

    <input type='text' v-model={context.v} />, context.v,
  ];
}
