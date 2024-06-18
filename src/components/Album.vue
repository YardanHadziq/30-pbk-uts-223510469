<template>
    <div class="album">
      <h1 class="text-2xl font-bold mt-8 mb-4">Albums</h1>
      <ul class="album-list">
        <li v-for="album in albums" :key="album.id" class="album-item" @click="goToAlbum(album.id)">
          <p>{{ album.title }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Album',
    setup() {
      const albums = ref([]);
      const router = useRouter();
  
      const fetchAlbums = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
          albums.value = response.data;
        } catch (error) {
          console.error('Error fetching albums:', error);
        }
      };
  
      const goToAlbum = (albumId) => {
        router.push({ name: 'PhotoList', params: { albumId } });
      };
  
      onMounted(fetchAlbums);
  
      return { albums, goToAlbum };
    },
  };
  </script>
  
  <style scoped>
  .album {
    padding: 20px;
  }
  .album-list {
    list-style-type: none;
    padding: 0;
  }
  .album-item {
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    margin-bottom: 10px;
    text-align: center;
  }
  .album-item:hover {
    background-color: #f0f0f0;
  }
  .album-item p {
    margin: 0;
  }
  </style>
  