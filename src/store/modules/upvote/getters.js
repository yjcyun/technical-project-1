export default {
  getUpvoteCount: (state) => (id) => {
    if (!state[id]) {
      return 0;
    }
    return state[id].count;
  },
  isGroupSelected: (state) => (id) => {
    return state[id].selected;
  },
};
