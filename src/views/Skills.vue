<template>
  <section class="section-skills">
    <h2
      class="tag tag--h2 title-2 text-animate"
      aria-label="Skills"
    />
  </section>
</template>
<script>
import textAnimate from "@/helpers/textAnimate";
export default {
  mounted() {
    textAnimate('.text-animate')
  },
};
</script>
