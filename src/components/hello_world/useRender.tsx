import CustomButton from '../CustomButton';
import type { HelloWorld } from './HelloWorld';

export default function useRender(c: HelloWorld) {
  return (
    <div>
      <p v-text={c.newMsg} />

      <CustomButton onCustomClick={c.onCustomClick} />

      <div style={{ 'margin-top': '3px' }}>
        {c.$slots?.default?.()}
      </div>
    </div>
  );
}
