import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) //use pinia
app.use(VueQueryPlugin)
app.use(router) //use router
app.use(vuetify)
app.mount('#app')
