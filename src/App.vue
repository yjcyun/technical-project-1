<template>
  <base-card>
    <the-upvote :behaviour="{ type: 'scroll', max: 10 }" id="1"></the-upvote>
    <the-upvote
      backgroundColor="pink"
      color="red"
      :behaviour="{ type: 'limit', max: 8 }"
      id="2"
    ></the-upvote>
    <the-upvote
      backgroundColor="#CDFFDD"
      color="#228B22"
      :behaviour="{ type: 'limit' }"
      id="3"
    ></the-upvote>
  </base-card>
</template>

<script>
import BaseCard from "./components/ui/BaseCard.vue";
import TheUpvote from "./components/upvote/TheUpvote.vue";

export default {
  components: { BaseCard, TheUpvote },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e0e0e0;
}
</style>
