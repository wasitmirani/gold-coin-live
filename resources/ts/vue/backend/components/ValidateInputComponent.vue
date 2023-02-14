<template>
    <div v-if="this.errors">
      <span class="text-danger">
              {{ getMessage(this.errors[value]) }}
      </span>
    </div>
  </template>

  <script>
  export default {
    name: "ValidationComponent",
    props: ["errors", "value"],
    methods:{
      getMessage(value){
          if(value){
              return value[0];
          }
      }
    }
  };
  </script>

  <style>
  </style
  >
