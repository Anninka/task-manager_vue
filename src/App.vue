<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Компания DNS. Тестовое задание. Task manager.</h1>
      </div>
    </header>
    <main class="container">
      <div class="task-desk">

      </div>
    </main>
    <footer class="page-footer">
      <div class="container"> 
        <p class="page-footer__text">Терентьева А.В.</p>
        <p class="page-footer__text">Владивосток 2023</p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-color: #ccdadd;
  font-family: Helvetica, Arial, sans-serif;
}

.page {
  display: grid;
  margin: 0 auto;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  min-width: 900px;
  margin-inline: auto;
}

.page-header {
  padding: 10px 40px;
  background-color: #6296a4;
  color: #ffffff;
}

.task-desk {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  height: calc(100vh - 236px);
  padding: 30px;
}

.page-footer {
  padding: 10px 40px;
  text-align: right;
}

.page-footer_text {
  font-size: 16px;
  line-height: 20px;
}
</style>
