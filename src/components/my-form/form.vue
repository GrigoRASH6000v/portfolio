<template>
  <div class="form">
    <component
      :class="{ 'input--isInvalid': getInvalidStatus(element) }"
      @input="clearClass(element)"
      :is="element"
      v-for="(element, idx) in this.$slots.default()"
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
  data() {
    return {
      formElements: this.createFormElements()
    };
  },
  methods: {
    clearClass(element) {
      const name = this.getElementName(element)
      if(!this.formElements[name]) return
      if (this.formElements[name].isInvalid) this.formElements[name].isInvalid = false;
    },
    createFormElements() {
      return this.$slots.default().reduce((acc, el) => {
        if (el.props.hasOwnProperty("required")) {
          const name = this.getElementName(el);
          acc[name] = {
            isInvalid: false,
          };
        }
        return acc;
      },{});
    },
    getInvalidStatus(el){
      const status = this.formElements[this.getElementName(el)]
      if(status !== undefined){
        return this.formElements[this.getElementName(el)].isInvalid
      }
      return false
    },
    getElementName(el){
      return el.props.name
    },
    fieldsValidation(arr) {
      arr.forEach((el) => {
        const { key, value } = el;
        if (!value) this.formElements[key].isInvalid = true;
      });
    },
    submitHandler() {
      const result = this.checkForm();
      if (result) {
        this.submit();
      }
    },
    checkForm() {
      const formArray = Object.entries(this.rules);
      const resultArray = formArray.map((el) => {
        const key = el[0];
        const { type, regExp } = el[1];
        const value = this.model[key];
        if (type === "no-empty") return { key, value: !!value };
        if (type === "valid") return { key, value: regExp.test(value) };
      });
      this.fieldsValidation(resultArray);
      return resultArray.every((el) => el.value);
    },
  },
};
</script>

<style lang="scss">
.form {
  display: grid;
  row-gap: 2rem;
}
</style>
