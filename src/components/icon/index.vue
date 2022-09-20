<template>
  <component
    :is="name"
    :class="['icon', 'icon--' + name]"
  />
</template>

<script>
import githubIconVue from "./github-icon.vue";
import telegrammIconVue from "./telegramm-icon.vue";
// import menuIconCertificate from "@/components/icon/modules/menu-icon-certificate";
// import menuIconCatalog from "@/components/icon/modules/menu-icon-catalog";
// import menuIconMyCourse from "@/components/icon/modules//menu-icon-my-course.vue";
// import menuIconHome from "@/components/icon/modules/menu-icon-home";
// import arrow from "@/components/icon/modules/arrow";
// import close from "@/components/icon/modules/close";
// import magnifier from "@/components/icon/modules/magnifier";
// import clock from "@/components/icon/modules/clock";
// import star from "@/components/icon/modules/star";
// import logo from "@/components/icon/modules/logo";
// import download from "@/components/icon/modules/download.vue";
// import chevron from "@/components/icon/modules/chevron.vue";
// import arrowBack from "@/components/icon/modules/arrow-back";
// import arrowLong from "@/components/icon/modules/arrow-long.vue";
// import paperClip from "@/components/icon/modules/paper-clip.vue";
// import paperAirplane from "@/components/icon/modules/paper-airplane.vue";
// import trash from "@/components/icon/modules/trash";
// import pen from "@/components/icon/modules/pen";
// import file from "@/components/icon/modules/file";
// import floppyDisc from "@/components/icon/modules/floppy-disc";
export default {
  components: {
    "github-icon": githubIconVue,
    "telegramm-icon": telegrammIconVue
    // magnifier,
    // close,
    // clock,
    // star,
    // arrow,
    // menuIconHome,
    // menuIconMyCourse,
    // menuIconCatalog,
    // menuIconCertificate,
    // logo,
    // download,
    // chevron,
    // trash,
    // pen,
    // file,
    // "arrow-long": arrowLong,
    // "arrow-back": arrowBack,
    // "paper-clip": paperClip,
    // "paper-airplane": paperAirplane,
    // "floppy-disc": floppyDisc,
  },
  props: {
    name: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss">
.icon {
  width: 1.5rem;
}
</style>
