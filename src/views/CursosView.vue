<template>
  <div>
    <div v-if="loading">
      <PageLoading></PageLoading>
    </div>

    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <ul class="cursos-lista">
          <li v-for="MyCurso in api.cursos" :key="MyCurso.id">
            <h2>
              <router-link
                :to="{
                  name: 'MyCurso',
                  params: { MyCurso: MyCurso.id },
                }"
              >
                Cursos {{ MyCurso.nome }} - {{ MyCurso.totalAulas }} aulas |
                {{ MyCurso.horas }} horas
              </router-link>
            </h2>
            <p>{{ MyCurso.descricao }}</p>
            <router-view></router-view>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import PageLoading from "../components/PageLoading.vue";

export default {
  name: "CursosView",
  components: {
    PageLoading,
  },
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style>
.cursos-lista li {
  margin-bottom: 40px;
}
</style>
