require("./bootstrap");

import { createApp } from "vue";
import FrontTemplate from "./FrontTemplate.vue";

import Router  from "./routes.js";

const app = createApp({});

app.component("front-template", FrontTemplate);
app.use(Router);
app.mount("#app");
