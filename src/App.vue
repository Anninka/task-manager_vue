<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Компания DNS. Тестовое задание. Task manager.</h1>
      </div>
    </header>
    <main class="page-main">
      <div class="task-desk container">
        <div 
        class="task-list"
        v-for="(tasks, status) in groupedTasks" 
        :key="status"
        >
          <div class="task-list__header">{{ status}}</div>
          <div 
          class="task-item"
          :key="task.id"
          v-for="task in tasks"
          >
            <p class="task-item__title">Название: <span>{{ task.title }}</span></p>
            <p class="task-item__title">Описание: <span>{{ task.description }}</span></p>
            <p class="task-item__title">Автор: <span>{{ task.author }}</span></p>
            <p class="task-item__title">Дата создания: <span>{{ new Date(task.date).toLocaleString() }}</span></p>
            <p class="task-item__title" v-if="task.status !== 'Создана'">Взяли в работу: <span>{{ new Date(task.atwork).toLocaleString()}}</span></p>
            <p class="task-item__title" v-if="task.status !== 'Создана'">Затрачено времени: <span>{{ getWorkTime(task) }}</span></p>
            <p class="task-item__title">Состояние: <span>{{ task.status }}</span></p>
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
          title: 'Удаление выполненных задач', 
          description: 'Добавить функционал удаления задач из колонки "Завершена"',
          author: 'Терентьева',
          date: '2023-03-13T10:10:00',
          atwork: '2023-03-13T11:10:00',
          done: '',
          status: 'В работе',
        },
        {
          id: 2, 
          title: 'Перетаскивание задач', 
          description: 'Добавить возможность перетаскивать задачи между колонками создана/в работе/завершена',
          author: 'Петров',
          date: '2023-03-12T12:55:00',
          atwork: '',
          done: '2023-03-13T17:46:00',
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
          title: 'Создание новой карточки', 
          description: 'Необходимо провести следующие операции',
          author: 'Сидорова',
          date: '2023-03-09T10:05:00',
          atwork: '2023-03-09T10:10:00',
          done: '2023-03-15T11:55:00',
          status: 'Завершена',
        },
        {
          id: 5, 
          title: 'Разделить проект на компоненты', 
          description: 'Разделить проект на несколько компонентов по смыслу',
          author: 'Рукавишников',
          date: '2023-03-12T11:48:00',
          atwork: '',
          status: 'Создана',
        },
        {
          id: 6, 
          title: 'Возможность менять оформление', 
          description: 'Реализовать возможность менять цветовую гамму, как минимум 3 варианта',
          author: 'Морозова',
          date: '2023-03-13T12:07:00',
          atwork: '2023-03-13T12:10:00',
          status: 'В работе',
        },
        {
          id: 7, 
          title: 'Придумать содержимое задач', 
          description: 'Придумать названия и описания задач для тестирования таск-менеджера. А то у меня уже фантазия заканчивается.',
          author: 'Терентьева',
          date: '2023-03-16T12:12:00',
          atwork: '2023-03-16T12:52:00',
          status: 'В работе',
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
    },
  },
  methods: {
    //Функция высчитывает затраченное время на задачу в зависимости от её состояния.
    getWorkTime(obj) {
      if (obj.status === 'В работе') {
        return `${Math.floor((new Date() - new Date(obj.atwork))/(1000*60*60))} ч.`
      } else if (obj.status === 'Завершена') {
        return `${Math.floor((new Date(obj.done) - new Date(obj.atwork))/(1000*60*60))} ч.`
      }
    }
  },
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
  height: calc(100vh - 120px);
  padding: 30px;
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

.task-list {
  padding: 0 20px;
  background-color: $base-secondary;
  border-radius: 6px;
  overflow: auto;
}
.task-list__header {
  position: sticky;
  top: 0;
  padding: 10px 0;
  font-size: 20px;
  line-height: 24px;
  background-color: $base-secondary;
}

.task-item {
  margin-bottom: 20px;
  padding: 10px;
  background-color: $base-white;
  border-radius: 5px;
}

.task-item__title {
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
}

.task-item span {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
}

/* Стили ползунка */
.task-list {
  scrollbar-width: thin;
  scrollbar-color: $primary-darker $primary-light;
}

/* для Chrome/Edge/Safari */
.task-list::-webkit-scrollbar {

  width: 12px;
}
.task-list::-webkit-scrollbar-track {
  margin-top: 44px;
  background: $primary-light;
}
.task-list::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: $primary-darker;
  border-radius: 5px;
}
</style>
