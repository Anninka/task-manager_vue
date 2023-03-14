<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Компания DNS. Тестовое задание. Task manager.</h1>
        <button class="button" @click="showPopup">Добавить задачу</button>
      </div>
    </header>
    <main class="page-main">

      <div class="task-desk container">
        <task-list 
        :tasks="tasks" 
        :groupedTasks="groupedTasks"
        >
        </task-list>
      </div>

      <task-popup 
      v-model:show="taskVisible"
      @create="createTask"
      >
      </task-popup>

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
import TaskList from './components/TaskList.vue';
import TaskPopup from './components/TaskPopup.vue';

export default {
  components: {
    TaskList, TaskPopup
  },
  data() {
    return {
      tasks: [
        {
          id: 1, 
          title: 'Создание новой карточки', 
          description: 'Необходимо провести следующие операции',
          author: 'Сидорова',
          date: '2023-03-09T10:05:00',
          atwork: '2023-03-09T10:10:00',
          done: '2023-03-15T11:55:00',
          status: 'Завершена',
        },
        {
          id: 2, 
          title: 'Перетаскивание задач', 
          description: 'Добавить возможность перетаскивать задачи между колонками создана/в работе/завершена',
          author: 'Петров',
          date: '2023-03-12T12:55:00',
          atwork: '',
          done: '',
          status: 'Создана',
        },
        {
          id: 3, 
          title: 'Добавление задач в таск-менеджер', 
          description: 'Реализовать добавление новых задач в таск-менеджере по шаблону. Все поля обязательные.',
          author: 'Иванов',
          date: '2023-03-10T09:00:00',
          atwork: '2023-03-10T10:12:00',
          done: '',
          status: 'В работе',
        },
        {
          id: 4, 
          title: 'Удаление выполненных задач', 
          description: 'Добавить функционал удаления задач из колонки "Завершена"',
          author: 'Терентьева',
          date: '2023-03-13T10:10:00',
          atwork: '2023-03-13T11:10:00',
          done: '',
          status: 'В работе',
        },
        {
          id: 5, 
          title: 'Разделить проект на компоненты', 
          description: 'Разделить проект на несколько компонентов по смыслу',
          author: 'Рукавишников',
          date: '2023-03-13T11:48:00',
          atwork: '2023-03-13T12:05:00',
          done: '2023-03-13T18:05:00',
          status: 'Завершена',
        },
        {
          id: 6, 
          title: 'Возможность менять оформление', 
          description: 'Реализовать возможность менять цветовую гамму, как минимум 3 варианта',
          author: 'Морозова',
          date: '2023-03-13T12:07:00',
          atwork: '2023-03-13T12:10:00',
          done: '',
          status: 'В работе',
        },
        {
          id: 7, 
          title: 'Придумать содержимое задач', 
          description: 'Придумать названия и описания задач для тестирования таск-менеджера. А то у меня уже фантазия заканчивается.',
          author: 'Терентьева',
          date: '2023-03-16T12:12:00',
          atwork: '2023-03-16T12:52:00',
          done: '',
          status: 'В работе',
        },
      ],
      statusId: {'Создана': 0, 'В работе': 1, 'Завершена': 2},
      taskVisible: false,
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
    },
  },
  methods: {
    //Функция добавляет новую задачу к массиву задач и закрывает попап
    createTask(task) {
      this.tasks.push(task);
      this.taskVisible = false;
    },
    //Функция делает попам видимым
    showPopup() {
      this.taskVisible = true;
    },
  }
}
</script>

<style lang="scss">
@import "./assets/style/variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Helvetica", "Arial", sans-serif;
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
  background-color: $primary-darker;
  color: $base-white;
}

.page-main {
  background-color: $base-primary;
}

.task-desk {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  height: calc(100vh - 163px);
  padding: 10px 30px;
}

.page-footer {
  padding: 10px 40px;
  text-align: right;
  background-color: $base-primary;
}

.page-footer_text {
  font-size: 16px;
  line-height: 20px;
}

.button {
  align-self: flex-end;
  margin-top: 12px;
  padding: 10px 15px;

  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 14px;
  color: $base-white;

  background: none;
  border: 1px solid $base-white;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
   border-color: $primary-light;
   box-shadow: 0 1px 1px $black-opacity inset, 0 0 8px $primary-light;
   outline: 0 none;
  }

  &:active {
    background-color: $base-secondary;
  }
}
</style>
