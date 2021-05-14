// @ts-nocheck
// eslint-disable-next-line no-unused-vars
type Func = ((this: any, ...args: any[]) => any | void);

export default interface GlobalProps {
  vSlots?: { [id: string]: Func },
}
