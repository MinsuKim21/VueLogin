<template>
  <div id="app">
    <loginHeader></loginHeader>
    <loginInput></loginInput>
  </div>
</template>

<script>
import loginHeader from './components/loginHeader.vue'
import loginInput from './components/loginInput.vue'


export default {
  components:{
    loginHeader,
    loginInput

  },
  methods: function() {

  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;

}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>