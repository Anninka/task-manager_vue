<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Компания DNS. Тестовое задание. Task manager.</h1>
      </div>
    </header>
    <main class="container">
      <div class="task-desk">
        <div 
        class="task-list"
        v-for="(tasks, status) in groupedTasks"
        :key="status"
        >
          <div class="task-list__header">{{ status }}</div>
          <div 
          class="task-item"
          :key="task.id"
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
          status: "В работе",
        },
        {
          id: 2, 
          title: "Перетаскивание задач", 
          description: "Добавить возможность перетаскивать задачи между колонками создана/в работе/завершена",
          author: "Петров",
          date: "12.03.2023 12:55",
          status: "Завершена",
        },
        {
          id: 3, 
          title: "Добавление задач в таск-менеджер", 
          description: "Реализовать добавление новых задач в таск-менеджере по шаблону. Все поля обязательные.",
          author: "Иванов",
          date: "10.03.2023 11:33",
          status: "В работе",
        },
        {
          id: 4, 
          title: "Создание новой карточки", 
          description: "Необходимо провести следующие операции",
          author: "Сидорова",
          date: "09.03.2023 10:05",
          status: "Завершена",
        },
        {
          id: 5, 
          title: "Разделить проект на компоненты", 
          description: "Разделить проект на несколько компонентов по смыслу",
          author: "Рукавишников",
          date: "13.03.2023 11:48",
          status: "Создана",
        },
        {
          id: 6, 
          title: "Возможность менять оформление", 
          description: "Реализовать возможность менять цветовую гамму, как минимум 3 варианта",
          author: "Морозова",
          date: "13.03.2023 12:07",
          status: "В работе",
        },
      ],
      statusId: {'Создана': 0, 'В работе': 1, 'Завершена': 2},
    }
  },
  computed: {
    //Создает копию исходного массива и сортирует ее по статусу. Затем создает объект с массивами по кол-ву вариантов свойства status. В каждом массиве - объекты с одинаковыми значениями status. 
    groupedTasks() {
      const sortTasks = [...this.tasks].sort((a, b) => this.statusId[a.status] - this.statusId[b.status]);
      return sortTasks.reduce((groups, task) => {
        const status = task.status;
        if (!groups[status]) {
          groups[status] = [];
        }
        groups[status].push(task);
        return groups;
      }, {});
    }
  },  
}
</script>

<style lang='scss'>
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
