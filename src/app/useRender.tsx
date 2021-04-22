import { withModifiers } from 'vue';
import HelloWorld from '@/components/hello_world/HelloWorld';
import logo from '@/assets/logo.png';
import { App } from '@/app/App';

export default function (context: App) {
  return <>
    <img alt="Vue logo" src={logo} />

    { /* WithTemplate is a .vue single component,
    mix on tsx default template make ts lint angry */ }
    <with-template msg="Oh yes" />

    <HelloWorld msg="Hello Vue 3.0 + Vite"
      onCustom={(str) => console.log(str)}
      vSlots={{
        default: () => 'Hello from slots',
      }} />

    <button onClick={withModifiers(() => {
      console.log('clicked');
    }, ['stop'])}>Click me
    </button>

    <input type="text" v-model={context.v} /> {context.v}

    <router-view />

    <router-link to={{ name: 'test' }} v-slots={{
      default: ({ navigate, href }: { navigate: any, href: string }) => (
        <a href={href} onClick={navigate}>A Router Link</a>
      ),
    }} />
  </>;
}
