import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";

import BaseButton from "./components/ui/BaseButton.vue";
import UpIcon from "./components/svg/UpIcon.vue";
import AddIcon from "./components/svg/AddIcon.vue";

const app = createApp(App);

app.use(store);

app.component("base-button", BaseButton);
app.component("up-icon", UpIcon);
app.component("add-icon", AddIcon);

app.mount("#app");
