<template>
  <div 
  class="task-list"
  v-for="(taskGroups, status) in groupedTasks" 
  :key="status"
  >
  <div class="task-list__header">{{ status }}</div>
  <task-item :taskGroups="taskGroups"></task-item>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem
  },
  props: {
    tasks: {
      type: Array,
      require: true,
    },
    groupedTasks: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang='scss' scoped>
@import "../assets/style/variables.scss";
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