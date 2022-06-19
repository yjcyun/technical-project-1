<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["behaviour"],
  methods: {
    flexWrap() {
      return this.behaviour.type === "scroll" ? "nowrap" : "wrap";
    },
  },
};
</script>

<style scoped>
div {
  min-height: 5.5rem;
  padding: 0.7rem;
  border-radius: 1rem;
  border: 1px solid rgb(200, 200, 200);
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-right: 1rem;
  max-width: 500px;
  flex-wrap: v-bind(flexWrap());
  overflow: auto;
}
</style>
