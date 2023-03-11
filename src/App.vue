<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Компания DNS. Тестовое задание. Task manager.</h1>
      </div>
    </header>
    <main class="container">
      <div class="task-desk">
        <div class="task-list">
          <div class="task-list__header">Создана</div>
          <div 
          class="task-item"
          :key="task"
          v-for="task in tasks"
          >
            <p class="">Название: {{ task.title }}</p>
            <p class="">Описание: {{ task.description }}</p>
            <p class="">Автор: {{ task.author }}</p>
            <p class="">Дата создания: {{ task.date }}</p>
            <p class="">Взяли в работу:</p>
            <p class="">Затрачено времени: {{ task.time }}</p>
            <p class="">Состояние: {{ task.status }}</p>
          </div>
        </div>
        <div class="task-list">
          <div class="task-list__header">В работе</div>
        </div>
        <div class="task-list">
          <div class="task-list__header">Завершена</div>
        </div>
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
  components: {

  },
  data() {
    return {
      tasks: [
        {
          id: 1, 
          title: "Удаление выполненных задач", 
          description: "Добавить функционал удаления задач из колонки 'Завершена'",
          author: "Терентьева",
          date: "13.03.2023 10:10",
        },
        {
          id: 2, 
          title: "Перетаскивание задач", 
          description: "Добавить возможность перетаскивать задачи между колонками создана/в работе/завершена",
          author: "Петров",
          date: "12.03.2023 12:55",
        },
        {
          id: 3, 
          title: "Добавление задач в таск-менеджер", 
          description: "Реализовать добавление новых задач в таск-менеджере по шаблону. Все поля обязательные.",
          author: "Иванов",
          date: "10.03.2023 11:33",
        },
        {
          id: 4, 
          title: "Создание новой карточки", 
          description: "Необходимо провести следующие операции",
          author: "Сидорова",
          date: "09.03.2023 10:05",
        },
      ],
    }
  },
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
  height: calc(100vh - 220px);
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

.task-list {
  padding: 10px;
  background-color: #a1c2cb;
  border-radius: 6px;
  overflow: auto;
}
.task-list__header {
  height: 30px;
}

.task-item {
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
}
</style>
