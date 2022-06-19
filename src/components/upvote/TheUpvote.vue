<template>
  <div>
    <upvotes-list :behaviour="behaviour">
      <upvote-item
        v-for="count in upvoteCount(id)"
        :backgroundColor="backgroundColor"
        :color="color"
        :id="id"
      ></upvote-item>
    </upvotes-list>
    <base-button @click="addUpvotes">
      <add-icon width="35" height="35"></add-icon>
    </base-button>
  </div>
</template>

<script>
import UpvoteItem from "./UpvoteItem.vue";
import UpvotesList from "./UpvotesList.vue";

export default {
  components: { UpvoteItem, UpvotesList },
  computed: {
    upvoteCount() {
      return this.$store.getters["upvote/getUpvoteCount"];
    },
  },
  props: {
    /* id is a key of the global state object from the upvote module.
     * i.e. `{[id: number]: {selected: true, count: 0}}`
     * id MUST be globally unique
     */
    id: {
      type: String,
      required: true,
    },
    /* backgroundColor is a string of css colour that is used in the UpvoteItem component when it is selected.
     * i.e. `backgroundColor: 'pink'`, `backgroundColor: '#000'`, or `backgroundColor: 'rgb(0,0,0,1)'`
     * Defaults to light blue colour
     */
    backgroundColor: {
      type: String,
      required: false,
      default: "#e5e8fd",
    },
    /* color is a string of css colour that is used in the UpIcon component when UpvoteItem is selected.
     * i.e. `color: 'red'`, `color: '#000'`, or `color: 'rgb(0,0,0,1)'`
     * Recommended to use a colour darker than `backgroundColor`
     * Defaults to dark blue colour
     */
    color: {
      type: String,
      required: false,
      default: "#253cf2",
    },
    /* behaviour is an object with keys 'type' and 'max'.
     * `type:"limit"`: wraps in a flex container
     * `type:"scroll"`: scrolls horizontally in overflow
     * `max: number` will limit the number of UpvoteItems that can be rendered
     */
    behaviour: {
      type: Object,
      required: false,
      default() {
        return {
          type: "limit",
          max: 6,
        };
      },
    },
  },
  methods: {
    addUpvotes() {
      // if max is undefined, set it to 6 by default
      const maxLimit = this.behaviour.max ?? 6;
      if (this.$store.getters["upvote/getUpvoteCount"](this.id) === maxLimit) {
        alert(`Sorry! You cannot add more than ${maxLimit} upvotes`);
        return;
      }
      this.$store.dispatch("upvote/addCount", { id: this.id });
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
}
</style>
