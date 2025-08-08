type Func = ((this: any, ...args: any[]) => any);

interface GlobalProps {
  vSlots?: Record<string, Func>;
}

export default GlobalProps;
