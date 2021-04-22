## HelloWorld

The idea here is to show how declare a component with maximum check types.

- with `HelloWorld` type is possible to use props / setup result in the render function
- with `HelloWorldEvents` type is possible to use events in parent tsx component
  
  Events check are not fully supported, the interface has to be added in 
  [vue-tsx-shim.d.ts](/types/vue-tsx-shim.d.ts)
