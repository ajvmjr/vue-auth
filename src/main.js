import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA85nrFChqog9G_GQi1cVtIOQ7Euis2vs8",
  authDomain: "fir-auth-ddd46.firebaseapp.com",
  projectId: "fir-auth-ddd46",
  storageBucket: "fir-auth-ddd46.appspot.com",
  messagingSenderId: "339064233952",
  appId: "1:339064233952:web:a111c0fe9183e4829e5585"
}

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
