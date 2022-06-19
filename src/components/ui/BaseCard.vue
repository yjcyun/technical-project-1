<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 2rem;
  background-color: white;
  width: 40rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
