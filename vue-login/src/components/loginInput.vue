<template>
  <div id="loginBox">
      <li>    
        <div id="id_pw_wrap">
            <span>ID<input type="text" v-model="inputID"></span>
        </div>
        <div>
            <span>PW<input type="text" v-model="inputPW"></span>
        </div>
        <button type="summit" v-on:click="loginBtn" style="color:white">login</button>
      </li>
  </div>
</template>

<script>
export default {
    data: function(){
        return{
             inputID:"",
            inputPW:""
         }
    },
    methods: {
        loginBtn: function(){
            localStorage.setItem( this.inputID , this.inputID);
            localStorage.setItem( this.inputPW , this.inputPW);
            this.inputID = "";
            this.inputPW = "";
        }
    }
}
</script>

<style scoped>
li {
    padding: 24px;
    display: block;
    text-align:center;
}
.id_pw_wrap {
    height: 100%;
    border: 1px solid #dadada;
    padding: 17px 18px 17px 19px;
}
input {
  border-style: groove;
  width: 200px;
}
div {
    box-sizing: border-box;
    width: 553px;
    margin: 0 auto;
}
span {
    color: #2f3b52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
button{
    display: block;
    width: 100%;
    padding: 17px 0 15px;
    border-radius: 6px;
    border: solid 1px rgba(0,0,0,.15);
    background-color: #024173;
}
</style>