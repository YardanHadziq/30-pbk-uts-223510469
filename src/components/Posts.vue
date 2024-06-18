<template>
    <div>
      <h1 class="text-2xl font-bold mt-8 mb-4">Posts</h1>
      <form @submit.prevent="getPosts">
        <label for="userId">Select User:</label>
        <select v-model="selectedUserId" id="userId" class="user-select">
          <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
        </select>
            <button class="tombol" type="submit">Get Posts</button>
      </form>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [], // Daftar pengguna
        selectedUserId: null, // ID pengguna yang dipilih
        posts: [], // Posting yang akan ditampilkan
        loading: false
      };
    },
    mounted() {
      // Ambil daftar pengguna saat komponen dimuat
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    methods: {
      getPosts() {
        if (!this.selectedUserId) {
          return; // Jika tidak ada pengguna yang dipilih, keluar dari fungsi
        }
        this.loading = true;
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUserId}`)
          .then(response => {
            this.posts = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching posts:', error);
            this.loading = false;
          });
      }
    }
  };
  </script>
  
<style>
    .user-select {
        border-radius: 13px;
        padding: 5px 21px;
        margin-bottom: 30px;
    }
    .tombol {
        border-radius: 13px;
        padding: 5px 10px;
        margin-bottom: 30px;
    }
</style>