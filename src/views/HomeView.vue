<template>
  <div>
    <div v-if="loading">
      <PageLoading></PageLoading>
    </div>

    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <button class="btn-cursos">
            <router-link to="/CursosView">Cursos</router-link>
          </button>

          <div>
            <h2>Avaçiaçoes</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="../assets/aprender.png" alt="Aprenda Web Desing" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import PageLoading from "../components/PageLoading.vue";
export default {
  name: "HomeView",
  components: {
    PageLoading,
  },
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
};
</script>

<style>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 15px 40px;
  font-size: 1rem;
  margin-bottom: 40px;
  margin-top: 10px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
.btn-cursos a {
  color: white;
}
</style>
