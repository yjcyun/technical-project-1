<template>
  <base-button @click="toggleUpvote" :backgroundColor="getBackgroundColor">
    <up-icon :color="iconColor" width="35" height="35"></up-icon>
  </base-button>
</template>

<script>
export default {
  props: ["backgroundColor", "color", "id"],
  computed: {
    getBackgroundColor() {
      const isSelected = this.$store.getters["upvote/isGroupSelected"];
      return isSelected(this.id) ? this.backgroundColor : undefined;
    },
    iconColor() {
      const isSelected = this.$store.getters["upvote/isGroupSelected"];
      return isSelected(this.id) ? this.color : undefined;
    },
  },
  methods: {
    toggleUpvote() {
      this.$store.dispatch("upvote/toggleUpvote", {
        id: this.id,
      });
    },
  },
};
</script>
