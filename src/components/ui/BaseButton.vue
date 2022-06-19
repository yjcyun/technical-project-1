<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: "#f4f6f8",
    },
  },
};
</script>

<style scoped>
button {
  background-color: v-bind(backgroundColor);
  display: inline-flex;
  padding: 0.9rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}
</style>
