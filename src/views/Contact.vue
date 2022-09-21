<template>
  <section class="section-contacts">
    <div class="section-contacts__form">
      <h2 class="title-2">
        Контакты
      </h2>
      <p class="description">
        Люблю разнообразные и интересные задачи, но готов поработать и с легаси.
        Если заинтересовала мое кандидатура, напишите мне на почту или в соц
        сети.
      </p>
      <my-form
        :model="form"
        :rules="rules"
        :submit="sendForm"
      >
        <my-input
          name="name"
          placeholder="Имя"
          type="text"
          v-model="form.name"
        />
        <my-input
          name="email"
          placeholder="Email"
          type="email"
          v-model="form.email"
        />
        <my-input
          placeholder="Сообщение"
          type="textarea"
          v-model="form.message"
          :rows="30"
        />
        <template #button>
          <button
            type="submit"
            class="btn"
          >
            Отправить
          </button>
        </template>
      </my-form>
    </div>
  </section>
</template>
<script>
import myForm from "@/components/my-form/form";
import myInput from "@/components/my-form/input";
export default {
  components: {
    "my-form": myForm,
    "my-input": myInput,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      rules: {
        name: {
          type: "no-empty",
          isValid: true,
        },
        email: {
          type: "valid",
          regExp:
            /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/,
          isValid: true,
        },
      },
    };
  },
  methods: {

    isInvalid(field) {
      return !this.validationForm[field].isValid;
    },
    clearValid(field) {
      if (!this.validationForm[field].isValid)
        this.validationForm[field].isValid = true;
    },
    sendForm() {
      // if (this.checkForm(this.form)) {
      //   console.log("as");
      // }
    },
  },
};
</script>
<style lang="scss">
.section-contacts {
  height: 100%;
  display: flex;
  display: grid;
  column-gap: 4rem;
  grid-template-columns: 1fr 1fr;
  &__form {
    align-self: center;
    display: grid;
    row-gap: 3rem;
  }
  .form{
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
      grid-template-areas:
      "name email"
      "message message"
      ". btn";
  }
  .input{
    width: 100%;
  }
  .input:nth-child(1) {
    grid-area: name;
  }
  .input:nth-child(2) {
    grid-area: email;
  }
  .input:nth-child(3) {
    grid-area: message;
    margin-bottom: 2rem;
  }
  .btn {
    width: 100%;
    grid-area: btn;
    justify-self: flex-end;
  }
  // &__wrp {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   gap: 2rem;
  //   grid-template-areas:
  //     "name email"
  //     "message message"
  //     ". btn";
  // }

  // .form__input-inner {
  //   width: 100%;
  // }
  // .form__input-wrp:nth-child(1) {
  //   grid-area: name;
  // }
  // .form__input-wrp:nth-child(2) {
  //   grid-area: email;
  // }
  // .form__input-wrp:nth-child(3) {
  //   grid-area: message;
  //   margin-bottom: 2rem;
  // }
  // .btn {
  //   width: 100%;
  //   grid-area: btn;
  //   justify-self: flex-end;
  // }
}
</style>
