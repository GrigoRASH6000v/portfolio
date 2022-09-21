<template>
  <div :class="['input']">
    <input
      v-if="type !== 'textarea'"
      :value="modelValue"
      @input="(e) => $emit('update:modelValue', e.target.value)"
      class="input__inner"
      :type="type"
      :placeholder="placeholder"
    >
    <textarea
      v-else
      :value="modelValue"
      @input="(e) => $emit('update:modelValue', e.target.value)"
      class="input__inner"
      :placeholder="placeholder"
      cols="30"
      rows="10"
    />
    <span class="input__underline" />
  </div>
</template>
<script>
export default {
  emits: ["update:modelValue"],
  props: {
    type: {
      type: String,
      default: () => "text",
    },
    modelValue: {
      type: String,
      default: () => "",
    },
    placeholder: {
        type: String,
        default: ()=> ''
    },
    cols: {
        type: [String, Number],
        default: () => 30
    },
    rows: {
        type: [String, Number],
        default: () => 10
    }
  },
};
</script>
<style lang="scss" scoped>
.input {
  display: inline-block;
  position: relative;
  &__underline {
    background-color: $accent-1;
    display: block;
    height: 0.1rem;
    width: 0%;
    left: 0;
    bottom: 0;
    position: absolute;
    transition-duration: 0.3s;
    transition-property: width;
  }
  &__inner {
    width: 100%;
    display: block;
    position: relative;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    background-color: $dark-gray;
    border: none;
    outline: none;
    color: $gray;
    &:focus + .input__underline {
      width: 100%;
    }
  }
}
.input--isInvalid{
    .input__underline{
        width: 100%;
        background-color: $accent-2;
    }
}
</style>
