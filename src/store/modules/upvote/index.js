export default {
  namespaced: true,
  /* States dynamically added on a per-id basis
   * @returns { [ id: number ]: {selected: boolean, count: number}}
   */
  state() {
    return {};
  },
  getters: {
    getUpvoteCount: (state) => (id) => {
      if (!state[id]) {
        return 0;
      }
      return state[id].count;
    },
    isGroupSelected: (state) => (id) => {
      return state[id].selected;
    },
  },

  mutations: {
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
  },
  actions: {
    toggleUpvote(context, payload) {
      context.commit("toggleUpvote", payload);
    },
    addCount(context, payload) {
      context.commit("addUpvoteCount", payload);
    },
  },
};
