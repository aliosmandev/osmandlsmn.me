import { createApp } from "vue";
import VueTippy from "vue-tippy";

import App from "./App.vue";
import "@/styles/tailwind.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const app = createApp(App);

app.use(VueTippy, {
  theme: "tomato",
  defaultProps: { placement: "top", animation: "scale" },
});

app.mount("#app");
