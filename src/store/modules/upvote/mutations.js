export default {
  toggleUpvote(state, { id }) {
    if (!state[id]) {
      // when there's no state, toggleUpvote should never be called so arbitrarily set it to count of 1
      state[id] = {
        selected: true,
        count: 1,
      };
    } else {
      state[id].selected = !state[id].selected;
    }
  },
  addUpvoteCount(state, { id }) {
    if (!state[id]) {
      state[id] = {
        selected: false,
        count: 1,
      };
    } else {
      state[id].count++;
    }
  },
};
