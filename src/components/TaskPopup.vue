<template>
  <div class="task-popup" v-if="show" @click="closePopup">
    <div class="task-popup__content" @click.stop>
      <form class="task-popup__form" @submit.prevent>

        <h2 class="task-popup__title">Новая задача</h2>
        <p class="task-popup__text" v-if="formError">{{ formError }}</p>

        <input
        class="task-popup__input" 
        type="text" placeholder="Название" minlength="5" maxlength="100"
        v-model="task.title"
        >

        <textarea 
        class="task-popup__area" 
        placeholder="Описание" rows="8" minlength="20" maxlength="600"
        v-model="task.description"
        ></textarea>

        <input 
        class="task-popup__input" 
        type="text" placeholder="Автор" minlength="2" maxlength="50"
        v-model="task.author"
        >

        <button class="task-popup__button" @click="createTask">Создать</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskPopup',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      task: {
        title: '',
        description: '',
        author: '',
      },
      formError: '',
    }
  },
  //Создаем и уничтожаем слушатель на событие keydown чтобы реализовать закрытие попапа по нажатию клавиши esc. Без этих махинаций и функции escClosePopup(см ниже), при открытии попапа фокус остается на кнопке "Добавить задачу" и попап закрывается на ecs только если кликнуть (взять в фокус) input. 
  mounted() {
    window.addEventListener('keydown', this.escClosePopup);
  },
  destroy() {
    window.removeEventListener('keydown', this.escClosePopup);
  },
  methods: {
    createTask() {
      if (this.task.title === '' || this.task.description === '' || this.task.author === '') {
        this.formError = 'Заполните все поля!'
      } else {
        this.task.id = Date.now();
        this.task.date = new Date();
        this.task.status = 'Создана';
        //Создаем своё событие с параметром, подписываемся на него в App
        this.$emit('create', this.task);
        //Сбрасываем форму
        this.task = {
          title : '',
          description : '',
          author : '',
        }
      }
    },
    closePopup() {
      //Создаём свое событие и подписываемся на него в App через v-model
      this.$emit('update:show', false)
    },
    //Для закрытия попапа по клавише Esc
    escClosePopup(event) {
      if (this.show && event.key === 'Escape') {
        this.closePopup();
      }
    },
  }
}
</script>

<style lang='scss' scoped>
@import "../assets/style/variables.scss";
.task-popup {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  background-color: $black-opacity;
}

.task-popup__content {
  margin: auto;
  padding: 15px;
  background-color: $base-white;
  border-radius: 10px;
}

.task-popup__form {
  display: flex;
  flex-direction: column;
}

.task-popup__title {
  margin-bottom: 5px;
}

.task-popup__text {
  font-size: 16px;
  color: $base-red;
}

.task-popup__input,
.task-popup__area {
  font-size: 16px;
  min-width: 600px;
  margin-top: 10px;
  padding: 10px 15px;
  border: 1px solid $primary-darker;
  border-radius: 5px;
}

.task-popup__area {
  font-family: "Helvetica", "Arial", sans-serif;
  resize: none;
}

.task-popup__button {
  align-self: flex-end;
  margin-top: 10px;
  padding: 10px 15px;

  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 14px;

  background: none;
  border: 1px solid $primary-darker;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
   border-color: $primary-darker;
   box-shadow: 0 1px 1px $black-opacity inset, 0 0 8px $primary-darker;
   outline: 0 none;
  }

  &:active {
    background-color: $base-primary;
  }
}

</style>