<template>
    <div style="text-align: center">
      <h1 style="font-size: 50px; margin-bottom: 42px">Новая заявка</h1>
      <div class="form-container">
        <div style="display: flex; flex-direction: column; gap: 30px">
            <h2 style="font-size: 40px; margin: 0">Данные гостя</h2>
            <div style="display: flex; flex-direction: column; align-items: flex-start">
                <label for="fullName" style="">ФИО Гостя</label>
                <input id="fullName" v-model="fullName" required type="text" />
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-start">
                <label for="fullName" style="">Номер телефона гостя</label>
                <input id="fullName" v-model="fullName" required type="text" />
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-start">
                <label for="fullName" style="">Цель посещения</label>
                <input id="fullName" v-model="fullName" required type="text" />
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-start">
                <label for="timeOfVisit">Время посещения:</label>
                <input id="timeOfVisit" v-model="timeOfVisit" required type="time" />
            </div>
            <button @click="redirectToNewPage">Отправить</button>
        </div>
      </div>
    </div>
</template>
  
<script>
  /*import MainForm from "@/components/forms/MainForm.vue";*/
  
  export default {
    name: "Form"
  };

</script>
  
<style>
  #app {
    font-family: Inter, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    background-color: #1A21CA;
    padding: auto;
  }
  
  h1 {
    color: white;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 68px 48px;
    background-color: white;
    border-radius: 11px;
  }
  
  label {
    font-family: Inter;
    font-size: 25px;
    font-weight: bold;
    line-height: 200%;
  }
  
  input {
    width: 100%;
    background-color: #dff2fa;
    height: 60px;
    border-radius: 11px;
    border: none;
    padding: 14px 9px;
    box-sizing: border-box;
    font-size: 20px;
  }
  
  button {
    background-color: blue;
    font-size: 20px;
    font-weight: bold;
    border-radius: 11px;
    color: white;
    height: 60px;
    border: none;
    margin-top: 20px;
  }
  
  input:focus {
    text-decoration: none;
    border: 1px solid black;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  }
  
  button:hover {
    background-color: rgba(0, 0, 255, 0.8);
  }
</style>