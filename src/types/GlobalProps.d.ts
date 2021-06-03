// @ts-nocheck
// eslint-disable-next-line no-unused-vars
type Func = ((this: any, ...args: any[]) => any | void);

interface GlobalProps {
  vSlots?: { [id: string]: Func },
}

export default GlobalProps;
