require("./bootstrap");

import Vue from "vue";
import App from "./vue/app.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPlusCircle,
    faCircle,
    faCheckCircle,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlusCircle, faCircle, faCheckCircle, faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const app = new Vue({
    el: "#app",
    components: { App }
});
