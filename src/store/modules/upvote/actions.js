export default {
  toggleUpvote(context, payload) {
    context.commit("toggleUpvote", payload);
  },
  addCount(context, payload) {
    context.commit("addUpvoteCount", payload);
  },
};
