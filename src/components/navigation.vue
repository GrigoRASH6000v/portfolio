<template>
  <nav class="navigation">
    <div class="navigation__logo">
      <span class="navigation__logo-general">G</span>
      <span class="navigation__logo-name">Grigory</span>
      <span class="navigation__logo-post">Frontend Developer</span>
    </div>
    <ul class="navigation__list">
      <li
        class="navigation__item"
        v-for="route in routes"
        :key="route.name"
      >
        <router-link
          class="navigation__link"
          :to="route.path"
        >
          {{ route.name }}
        </router-link>
      </li>
    </ul>
    <div class="navigation__social-list">
      <a
        class="navigation__social-link"
        href="https://github.com/GrigoRASH6000v"
        target="_blank"
      >
        <icon name="github-icon" />
      </a>
      <a
        class="navigation__social-link"
        href="https://t.me/GrigoRASH6000"
        target="_blank"
      >
        <icon name="telegramm-icon" />
      </a>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    routes() {
      return this.$router.getRoutes().filter((r) => r.path !== "/");
    },
  },
};
</script>
<style lang="scss">
.navigation {
  background-color: $black-2;
  width: 13rem;
  display: grid;
  grid-template-rows: auto 1fr 20rem;
  align-items: center;
  &__item {
    border-bottom: 0.1rem solid #282828;
  }
  &__item:first-child {
    border-top: 0.1rem solid #282828;
  }
  &__link {
    display: block;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    color: $gray;
    transition-duration: 0.3s;
    transition-property: color;
    text-align: center;
  }
  &__social-list {
    display: flex;
    column-gap: 0.6rem;
    justify-content: center;
  }
  &__social-link {
    svg {
      transition-duration: 0.3s;
      transition-property: fill;
      width: 2rem;
      fill: $gray;
    }
    &:hover {
      svg {
        fill: $accent-1;
      }
    }
  }
  &__logo {
    display: grid;
    background-color: #000;
    padding-bottom: 3rem;
    &-general {
      text-align: center;
      font-family: "Gilroy-Bold";
      position: relative;
      z-index: 5;
      font-size: 10rem;
      color: $accent-2;
      line-height: 10rem;
      transform: translateX(-0.5rem);
      &::before {
        content: "G";
        font-size: 10rem;
        position: absolute;
        transform: translateX(0.5rem);
        color: $accent-1;
        z-index: 1;
      }
    }
    &-name {
      margin-bottom: 1rem;
      font-size: 2.8rem;
      color: $white;
      text-align: center;
    }
    &-post {
      text-align: center;
      font-size: 1.2rem;
      color: $gray;
    }
  }
  .router-link-active {
    color: $accent-1;
  }
}
</style>
