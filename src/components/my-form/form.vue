<template>
  <div class="form">
    <component
      :class="{'input--isInvalid': isInvalid(element)}"
      :is="element"
      v-for="(element, idx) in $slots.default()"
      :key="idx"
    />
    <component
      @click="submitHandler"
      :is="$slots.button()[0]"
    />
  </div>
</template>
<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    submit: {
      type: Function,
      default: () =>
        console.error("Warning! The handler function is not assigned"),
    },
  },
  methods: {
    submitHandler() {
      if(this.checkForm(this.model)){
        this.submit()
      }
    },
    isInvalid(element){
      const name = element.props.name
      if(element.props.name) return !this.rules[name].isValid
      return false
    },
    checkForm(form) {
      const formArray = Object.entries(form);
      return formArray
        .map((el) => {
          const rule = this.rules[el[0]];
          if (!rule) return true;
          const type = rule.type;
          if (type === "no-empty") {
            if (!el[1]) rule.isValid = false;
            return !!el[1];
          }
          if (type === "valid") {
            if (!rule.regExp.test(el[1])) rule.isValid = false;
            return rule.regExp.test(el[1]);
          }
        }).every((el) => Boolean(el));
    },
  },
  mounted() {
   // console.log(this.rules[this.$slots.default()[0].props.name].isValid)
  },
};
</script>

<style lang="scss">
.form {
  display: grid;
  row-gap: 2rem;
}
</style>
