<!-- App.vue -->
<template>
  <div id="app">
    <TopBar />
    <main class="px-2 w-full max-w-[750px] mx-auto">
      <div class="flex justify-center mt-2">
        <router-link to="/" class="text-black hover:text-gray-200 font-medium mr-4">Todos</router-link>
        <router-link to="/posts" class="text-black hover:text-gray-200 font-medium mr-4">Posts</router-link>
        <router-link to="/album" class="text-black hover:text-gray-200 font-medium">Album</router-link>
      </div>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: { TopBar, Footer },
};
</script>
