<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">Techno</router-link>
      </div>
      <ul>
        <li><router-link to="/CursosView">Cursos</router-link></li>
        <li><router-link to="/ContatoView">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style>
header {
  background: #234;
}
header a {
  color: white;
}
nav {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  padding: 20px;
}
a.router-link-active {
  color: #4b8;
}
.logo {
  flex: 1;
}
.logo a {
  color: white;
  font-size: 1.2rem;
}
ul li {
  display: inline-block;
}

li a {
  padding: 0 10px;
  margin-left: 10px;
}
</style>
