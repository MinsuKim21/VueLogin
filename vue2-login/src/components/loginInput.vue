<template>
  <div id="loginBox">
    <div id="id_pw_wrap">
        <span>ID<input type="text" v-model="inputID"></span>
    </div>
    <div>
        <span>PW<input type="text" v-model="inputPW"></span>
    </div>
    <button type="summit" v-on:click="loginBtn">login</button>
  </div>
</template>

<script>
var HOST = 'https://192.168.0.6:8080'
export default {
    data: function(){
        return{
            inputID:"",
            inputPW:""
         }
    },
    methods: {
        loginBtn: function(){
            let saveData = {}
            saveData.inputID = this.inputID;
            saveData.inputPW = this.inputPW;

            try{
               this.$axios 
                .post(HOST + "/signin", JSON.stringify(saveData), {
                     headers: {
                          "Content-Type": `application/json`, 
                          },
                        }) 
                .then((res) => { if (res.status === 200) { 
                    // 로그인 성공시 처리해줘야할 부분 
                    } 
                });
            }catch (error){
                console.error(error);
            }
        }
    }
    
}
</script>

<style scoped>
#loginBox {
    padding: 24px;
    display: block;
    text-align:center;
    border: 1px solid #dadada;
}
#id_pw_wrap {
    height: 100%;
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