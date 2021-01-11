import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import VueMaterial from "vue-material";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);

Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
  vuetify,
  el: "#app",
  render: (h) => h(App),
});
//.$mount('#app')
