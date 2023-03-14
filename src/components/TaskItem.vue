<template>
  <div 
  class="task-item"
  :key="task.id"
  v-for="task in taskGroups"
  >
    <p class="task-item__text">Название: <span>{{ task.title }}</span></p>
    <p class="task-item__text">Описание: <span>{{ task.description }}</span></p>
    <p class="task-item__text">Автор: <span>{{ task.author }}</span></p>
    <p class="task-item__text">Дата создания: <span>{{ new Date(task.date).toLocaleString() }}</span></p>
    <p class="task-item__text" v-if="task.status !== 'Создана'">Взяли в работу: <span>{{ new Date(task.atwork).toLocaleString()}}</span></p>
    <p class="task-item__text" v-if="task.status !== 'Создана'">Затрачено времени: <span>{{ getWorkTime(task) }}</span></p>
    <p class="task-item__text">Состояние: <span>{{ task.status }}</span></p>
  </div>
</template>

<script>
export default {
  props: {
    taskGroups: {
      type: Array,
      require: true,
    }
  },
  methods: {
    //Функция высчитывает затраченное время на задачу в зависимости от её состояния.
    getWorkTime(obj) {
      if (obj.status === 'В работе') {
        return `${Math.floor((new Date() - new Date(obj.atwork))/(1000*60*60))} ч.`
      } 
      if (obj.status === 'Завершена') {
        return `${Math.floor((new Date(obj.done) - new Date(obj.atwork))/(1000*60*60))} ч.`
      }
    }
  },
}
</script>

<style lang='scss' scoped>
@import "../assets/style/variables.scss";
.task-item {
  margin-bottom: 20px;
  padding: 10px;
  background-color: $base-white;
  border-radius: 5px;
}

.task-item__text {
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
</style>