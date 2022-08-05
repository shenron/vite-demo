import CustomButton from '../CustomButton';
import type { HelloWorld } from './HelloWorld';

export default function (c: HelloWorld) {
  return (
    <div>
      <p>{c.newMsg}</p>

      <CustomButton onCustomClick={c.onCustomClick} />

      <div style="margin-top: 3px;">
        {c.$slots?.default?.()}
      </div>
    </div>
  );
}
