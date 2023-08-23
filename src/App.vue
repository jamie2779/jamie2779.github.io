<template>
  <div class="main">
    <NavBar />
    <router-view />
  </div>
  <footer-bar/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
  },
  created() {
    this.$store.dispatch("getPostList");
    this.$store.dispatch("getProjectList");
  },
};
</script>

<style>
body {
  max-width: 720px;
  margin: auto;
}

.main{
  min-height: calc(100vh - 100px);

}
</style>
