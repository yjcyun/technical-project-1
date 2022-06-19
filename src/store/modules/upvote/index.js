import upvoteGetters from "./getters";
import upvoteMutations from "./mutations";
import upvoteActions from "./actions";

export default {
  namespaced: true,
  /* States dynamically added on a per-id basis
   * @returns { [ id: number ]: {selected: boolean, count: number}}
   */
  state() {
    return {};
  },
  getters: upvoteGetters,
  mutations: upvoteMutations,
  actions: upvoteActions,
};
