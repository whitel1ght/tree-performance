import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

const app = createApp(App)
// add vuestic-ui
app.use(createVuestic())

app.mount('#app')
