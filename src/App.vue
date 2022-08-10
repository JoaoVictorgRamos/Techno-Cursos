<template>
  <div>
    <TheHeader></TheHeader>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
body {
  margin: 0px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #234;
}
ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}
img {
  max-width: 100%;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}
@media (max-width: 400px) {
  .conteudo {
    display: block;
  }
}
</style>
