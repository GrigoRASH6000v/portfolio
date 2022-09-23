<template>
  <section class="section-about">
    <div class="section-about__main-block">
      <h1
        aria-label="Привет,  меня зовут Григорий,  я Фронтенд разработчик"
        class="tag tag--h1 text-animate section-about__greeting"
      />
      <button
        class="btn"
        @click="$router.push('/contact')"
      >
        Свяжитесь со мной!
      </button>
    </div>
  </section>
</template>
<script>
import textAnimate from "@/helpers/textAnimate";
export default {
  methods: {
    
    initListeners() {
      [...document.querySelectorAll("#title span")].forEach((span) => {
        span.addEventListener("mouseover", function () {
          this.classList.add("section-about__greeting-letter--active");
          setTimeout(() => {
            this.classList.remove("section-about__greeting-letter--active");
          }, 1000);
        });
      });
    },
  },
  mounted() {
    textAnimate('.text-animate')
  },
};
</script>
<style lang="scss">
.section-about {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  .section-about__greeting {
    font-size: 8rem;
    margin-bottom: 5rem;
    font-family: "Gilroy-Bold";
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
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    -ms-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    -ms-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    -ms-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    -ms-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    -ms-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
