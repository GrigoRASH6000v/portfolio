<template>
  <div class="input">
    <div
      v-if="required"
      class="input__star-wrp"
    >
      <svg
        class="input__star"
        viewBox="0 0 576 512"
      >
        <path
          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
        />
      </svg>
    </div>
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
    required: {
      type: Boolean,
      default: () => false,
    },
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
      default: () => "",
    },
    cols: {
      type: [String, Number],
      default: () => 30,
    },
    rows: {
      type: [String, Number],
      default: () => 10,
    },
  },
};
</script>
<style lang="scss" scoped>
.input {
  display: inline-block;
  position: relative;
  &__star-wrp{
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    transform: translateX(calc(-50%)) translateY(calc(-50%));
    z-index: 3;
    background-color: $black-1;
    border-radius: 50%;
    padding: 0.3rem;
  }
  &__star {
    width: 100%;
    height: 100%;

    fill: $accent-2;
   
    
    
   
    &:before {
      content: "";
      position: absolute;
      width: 1.5rem;
      height: 1.5rem;
      left: 0;
      top: 0;
      background-color: aqua;
    }
  }
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
.input--isInvalid {
  .input__underline {
    width: 100%;
    background-color: $accent-2;
  }
}
</style>
