<template>
  <p>Hello ({{ msg }}) <br /> from .vue template</p>
  <Foo>Call Foo</Foo>
  <CustomButton @custom-click="onCustomClick"/>
</template>

<script lang="ts" setup>
import CustomButton from '../CustomButton';
import Foo from '../foo/FooBar.vue';
import { onCustomClick } from './useOnClick';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
