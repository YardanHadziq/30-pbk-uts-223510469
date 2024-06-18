// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Posts from '../components/Posts.vue';
import Album from '../components/Album.vue';
import PhotoList from '../components/PhotoList.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/posts', name: 'Posts', component: Posts },
  { path: '/album', name: 'Album', component: Album },
  { path: '/albums/:albumId', name: 'PhotoList', component: PhotoList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
