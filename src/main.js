import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(far)

const app = createApp(App)

app.use(router)
app.component('icon', FontAwesomeIcon)
app.mount('#app')
