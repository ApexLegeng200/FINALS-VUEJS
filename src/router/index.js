import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'; 
import about from '../components/about.vue';
import gallery from '../components/gallery.vue';
import contact from '../components/contact.vue';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,  
    },
    {
      path: '/about',
      name: 'about',
      component: about,  
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery,  
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
    
  ]
});
