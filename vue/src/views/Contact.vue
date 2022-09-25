<template>
  <section class="tag tag--section section-contacts">
    <div class="section-contacts__form">
      <h2
        class="tag tag--h2 text-animate title-2"
        aria-label="Контакты"
      />

      <p class="tag tag--p description">
        Люблю разнообразные и интересные задачи, но готов поработать и с легаси.
        Если заинтересовала мое кандидатура, напишите мне на почту или в соц
        сети.
      </p>
      <my-form
        class="tag tag--form"
        :model="form"
        :rules="rules"
        :submit="sendForm"
      >
        <my-input
          required
          name="name"
          placeholder="Имя"
          type="text"
          v-model="form.name"
        />
        <my-input
          required
          name="email"
          placeholder="Email"
          type="email"
          v-model="form.email"
        />
        <my-input
          name="message"
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
import textAnimate from "@/helpers/textAnimate";
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
        },
        email: {
          type: "valid",
          regExp:
            /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/,
        },
      },
    };
  },
  methods: {
    sendForm() {
     console.log('send')
    },
  },
  mounted() {
    textAnimate('.text-animate')
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
}
</style>
