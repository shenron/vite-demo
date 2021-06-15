type Func = ((this: any, ...args: any[]) => any | void);

interface GlobalProps {
  vSlots?: { [id: string]: Func },
}

export default GlobalProps;
