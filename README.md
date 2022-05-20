# Issue with Vue 3.2.34

> npm run lint:tsc

```
src/main.tsx:12:13 - error TS2322: Type '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Partial<{}> & Omit<Readonly<ExtractPropTypes<{}>>, never>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Partial<{}> & Omit<Readonly<ExtractPropTypes<{}>>, never>'.

12   <MyButton class="a-super-class" />

```

'AllowedComponentProps' is ignored.
