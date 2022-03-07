import { withModifiers } from 'vue';
import HelloWorld from '@/components/hello_world/HelloWorld';
import BaseInput from '@/components/base_input/BaseInput';
import logo from '@/assets/logo.png';
import type { App } from './App';

export default function (context: App) {
  return <>
    <img alt="Vue logo" src={logo} />

    <div style="border: 1px solid black; width: 200px; margin: auto; margin-bottom: 10px;">
      { /* WithTemplate is a .vue single component,
      mix on tsx default template make ts lint angry */}
      <with-template msg="Prop message" />
    </div>

    <div
      style="border: 1px solid blue; width: 200px; margin: auto; margin-bottom: 10px; padding: 10px;">
      <HelloWorld msg="Vue 3.0"
        onCustom-click={console.log}
        vSlots={{
          default: () => 'slot render',
        }} />
    </div>

    <div
      style="border: 1px solid green; width: 200px; margin: auto; margin-bottom: 10px; padding: 10px;">
      <button onClick={withModifiers(() => {
        console.log('button clicked');
      }, ['stop'])}> Catch native event
      </button>
    </div>

    <div
      style="border: 1px solid pink; width: 200px; margin: auto; margin-bottom: 10px; padding: 10px;">
      <BaseInput vModel={context.v} /> {context.v}
    </div>

    <router-view />

    <router-link to={{ name: 'test' }} v-slots={{
      default: ({ navigate, href }: { navigate: any, href: string }) => (
        <a href={href} onClick={navigate}>A Router Link</a>
      ),
    }} />
  </>;
}
