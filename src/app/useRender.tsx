import { withModifiers } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/components/hello_world/HelloWorld';
import BaseInput from '@/components/base_input/BaseInput';
import logo from '@/assets/logo.png';
import DisplayMsgOnce from '@/components/DisplayMsgOnce';
import type { App } from './App';

const boxStyle = {
  width: '200px',
  margin: 'auto',
  padding: '10px',
  marginBottom: '10px',
};

export default function useRender(c: App) {
  return (
    <>
      <img alt="Vue logo" src={logo} />

      <div
        style={{
          ...boxStyle,
          border: '1px solid black',
        }}
      >
        { /* TS not happy to mix SFC and TSX components */}
        <with-template msg="Prop message" />
      </div>

      <div
        style={{
          ...boxStyle,
          border: '1px solid blue',
        }}
      >
        <HelloWorld
          class="a-class-name"
          msg="Vue 3.0"
          onCustomClick={console.log}
          vSlots={{
            default: () => 'slot render',
          }}
        />
      </div>

      <div
        style={{
          ...boxStyle,
          border: '1px solid green',
        }}
      >
        <button
          type="button"
          onClick={withModifiers(() => {
            console.log('button clicked');
          }, ['stop'])}
        >
          {' '}
          Catch native event
        </button>
      </div>

      <div
        style={{
          ...boxStyle,
          border: '1px solid pink',
        }}
      >
        <BaseInput v-model={c.v} />
        {' '}
        <DisplayMsgOnce msg={c.v} />
      </div>

      <RouterView />

      <RouterLink
        to={{ name: 'test' }}
        vSlots={{
          default: ({ navigate, href }) => (
            <a
              href={href}
              onClick={navigate}
              v-text="A Router Link"
            />
          ),
        }}
      />
    </>
  );
}
