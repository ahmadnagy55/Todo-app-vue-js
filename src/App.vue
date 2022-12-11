<template>
  <div class="container mt-3 text-center">
    <router-link to="/">FirstApp</router-link>
    <router-link to="/SecondApp">SecondApp</router-link>
    <!-- <router-link to="/ThirdApp">ThirdApp</router-link> -->
  </div>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<style scoped>
a {
  color: black;
  background: gold;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  border-radius: 3px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

a:hover {
  color: red;
}
</style>
