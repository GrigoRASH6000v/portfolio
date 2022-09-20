<template>
  <section class="section-about">
    <div class="section-about__main-block">
      <h1
        aria-label="Привет, меня зовут Григорий, я Фронтенд разработчик"
        class="section-about__greeting"
        v-html="
          splittingIntoLetters(
            'Привет, меня зовут Григорий, я Фронтенд разработчик'
          )
        "
      />
      <button class="btn">
        Свяжитесь со мной!
      </button>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    splittingIntoLetters(text) {
      const brokenText = text.split("");
      return brokenText.reduce((acc, el, index, arr) => {
        if (el === ' ' && arr[index-1] !== ",") return (acc += "&nbsp");
        acc += `<span class="section-about__greeting-letter">${el}</span>`;
        if (el === ",") acc += "<br>";
        return acc;
      }, "");
    },
  },
};
</script>
<style lang="scss">
.section-about {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 9rem 5rem;
  &__greeting {
    font-size: 8rem;
    margin-bottom: 5rem;
    font-family: "Gilroy-Bold";
  }
  &__greeting-letter {
    display: inline-block;
    transition: all 0.3s ease-out;
    font-size: inherit;
    color: $white;
    font-family: inherit;

    &:hover {
      color: $accent-1;
      animation: deformation 1s ease-in-out;
    }
  }
  &__main-block {
    .btn {
      font-size: 2rem;
      padding: 1.5rem 2.5rem;
    }
  }
}
@keyframes deformation {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1)
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    -ms-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1)
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    -ms-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1)
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    -ms-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1)
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    -ms-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1)
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    -ms-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1)
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1)
  }
}
</style>
