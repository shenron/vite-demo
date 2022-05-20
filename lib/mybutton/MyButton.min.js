import { defineComponent, createVNode, createTextVNode } from "vue";
var MyButton = defineComponent({
  name: "MyButton",
  setup() {
    return () => createVNode("button", null, [createTextVNode("My Super Button")]);
  }
});
export { MyButton as default };
