<template>
  <navigation />
  <main class="tag tag--main main">
    <transition>
      <router-view />
    </transition>
  </main>
</template>
<script>
import navigation from "@/components/navigation.vue";
export default {
  components: {
    navigation,
  },
  methods: {
    async getData(){
      const response = await this.$axios.get('http://localhost:8080/api/users')
      console.log(response)
    }
  },
  mounted() {
    this.getData()
  },
};
</script>
<style>
.main{
  height: 100%;
  overflow-y: auto;
  padding: 9rem 5rem;
}
</style>
