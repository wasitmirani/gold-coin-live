


require('./bootstrap');

import { createApp } from "vue";


import App from "./vue/App.vue";
import router from "./router";
// import FloatingVue from 'floating-vue'
import * as moment from 'moment'
// import 'floating-vue/dist/style.css';



import Notifications from '@kyvg/vue3-notification';

const app =createApp(App,{
      data(){
        return {
            host_url:'test/',

        }
    },
    mounted(){
        console.log("app mounted");
    }
});
app.config.globalProperties.hosturl = window.location.origin ;
app.use(Notifications)
// app.use(FloatingVue)
app.config.globalProperties.$filters = {
    DateTimeFormat(date:String) {
      return  moment.utc(String(date)).local().format('DD-MMM-YYYY ,h:mm a')
    },
    DateFormat(date:String) {
        return  moment.utc(String(date)).local().format('DD-MMM-YYYY')
      },
  }
app.use(router).mount("#app");
