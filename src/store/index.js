import { createStore } from "vuex";

import upvoteModule from "./modules/upvote";

const store = createStore({
  modules: {
    upvote: upvoteModule,
  },
});

export default store;
