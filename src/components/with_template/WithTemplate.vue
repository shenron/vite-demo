<template>
  <p>Hello ({{ msg }}) <br /> from .vue template</p>
  <Foo>Call Foo</Foo>
  <CustomButton @custom-click="onCustomClick"/>
</template>

<script lang="ts" src="./WithTemplate.ts"></script>
