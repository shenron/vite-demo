import { withModifiers } from 'vue';
import logo from '@/assets/logo.png';
import HelloWorld from '../components/hello_world/HelloWorld';

export default function (context: any) {
  return [
    <img alt="Vue logo" src={logo} />,

    <with-template msg="Oh yes" />, // WithTemplate is a .vue single component, mix on tsx default template make ts lint angry

    <HelloWorld msg="Hello Vue 3.0 + Vite"
      onCustom={(str: string) => console.log(str)}
      vSlots={{
        default: () => 'Hello from slots',
      }}/>,

    <button onClick={withModifiers(() => {
      console.log('clicked');
    }, ['stop'])}>Click me</button>,

    <input type='text' v-model={context.v} />, context.v,

    <router-view />,

    <router-link to={{ name: 'test' }} v-slots={{
      default: ({ navigate, href }: { navigate: any, href: string }) => (
        <a href={href} onClick={navigate}>A Router Link</a>
      ),
    }}/>,
  ];
}
