<template>
  <h3>Авторизация</h3>
  
    <div class="form-group">
        <label>Почта</label>
        <input type="email" class="form-control" placeholder="Копроративная почта"/>
    </div>

    <div class="form-group">
        <label>Пароль</label>
        <input type="password" class="form-control" placeholder="Пароль"/>
    </div>

    <button class="btn btn-primary btn-block" @click="sendData()" >Войти</button>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>


<style scoped>
input{
  display: block;
  margin-bottom: 10px;
  width: 350px;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid rgb(57, 85, 227);
  outline: none;
  font-size:inherit 1.5px;
  background: rgba(91, 149, 241, 0.57);
  opacity: 0.5;
  background: rgb(214, 233, 255);
  transform: translate(-1em);
  
  
  
}

h1{
    position: relative;
    bottom: 100px;
    font-size: 1.5 rem;
    font-weight: 500;
    color: #333;

}

button{
  border: 0;
  border-radius: 7px;
  outline: none;
  padding: 10px 15px;
  background: rgb(65, 81, 254);
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
  transition: tranform 500ms ease;
}

.img{
    position:absolute;
    height: 100%;
    
    width: 553px;
    top:0;
    right: 0;
    z-index: 1000;
}


</style>