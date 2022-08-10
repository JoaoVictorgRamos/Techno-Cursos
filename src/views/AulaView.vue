<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h2>{{ api.nome }}</h2>
        <div class="video">
          <iframe
            width="560"
            height="315"
            :src="`https://www.youtube.com/embed/${api.youtube}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import PageLoading from "../components/PageLoading.vue";

export default {
  name: "MyAula",
  props: ["MyAula"],
  mixins: [fetchData],
  components: {
    PageLoading,
  },
  created() {
    this.fetchData(`/aula/${this.MyAula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`/aula/${to.params.MyAula}`);
    next();
  },
};
</script>

<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}
.video iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
</style>
