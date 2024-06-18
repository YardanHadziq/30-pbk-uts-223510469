<template>
    <div class="photo-list">
      <h1 class="text-2xl font-bold mt-8 mb-4">Album Photo yang ke {{ albumId }}</h1>
      <div class="photos">
        <div v-for="photo in photos" :key="photo.id" class="photo" @click="showPhoto(photo.url)">
          <img :src="photo.thumbnailUrl" :alt="photo.title">
        </div>
      </div>
      <div v-if="selectedPhoto" class="modal" @click="closeModal">
        <img :src="selectedPhoto" alt="Selected Photo">
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'PhotoList',
    setup() {
      const route = useRoute();
      const albumId = route.params.albumId;
      const photos = ref([]);
      const selectedPhoto = ref(null);
  
      const fetchPhotos = async () => {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
          photos.value = response.data;
        } catch (error) {
          console.error('Error fetching photos:', error);
        }
      };
  
      const showPhoto = (url) => {
        selectedPhoto.value = url;
      };
  
      const closeModal = () => {
        selectedPhoto.value = null;
      };
  
      onMounted(fetchPhotos);
  
      return { albumId, photos, selectedPhoto, showPhoto, closeModal };
    },
  };
  </script>
  
  <style scoped>
  .photo-list {
    padding: 20px;
  }
  .photos {
    display: flex;
    flex-wrap: wrap;
  }
  .photo {
    margin: 10px;
    cursor: pointer;
  }
  .photo img {
    max-width: 150px;
    border-radius: 8px;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal img {
    max-width: 90%;
    max-height: 90%;
  }
  </style>
  