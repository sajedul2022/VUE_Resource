import { createApp } from 'vue'
import router from './router'

// import App from './App.vue'
// import App from './App1.vue'
// import App from './Reactivity.vue'
// import App from './Reactivity1.vue'
// import App from './Reactivity2.vue'
// import App from './Computed1.vue'
// import App from './Computed2.vue'
// import App from './Toggolebtn.vue'
// import App from './Conditional.vue'
import App from './ListRendering.vue'

// import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
