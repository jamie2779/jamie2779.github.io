<template>
  <div class="NavBar">
    <!-- <img src="@/assets/logo.png" alt="a logo of blog" /> -->
    <h1 class="title">Boring Devlog</h1>
    <div class="menu">
      <span @click="goMenu('/')">Home</span>
      <span @click="goMenu('/About')">About</span>
      <span @click="goMenu('/Posts')">Posts</span>
      <span @click="goMenu('/Projects')">Projects</span>
    </div>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    goMenu(name) {
      this.$router.push(name);
    },
  },
};
</script>

<style>
.NavBar {
  width: 100%;
  text-align: center;
  margin-top: 15px;
}
.NavBar > img {
  width: 40px;
}
.NavBar > .title {
  font-size: 32px;
  margin: 10px;
  letter-spacing: 3px;
    font-family: "NanumBarunPen";

}
.NavBar > .menu > span {
  font-size: 18px;
  margin: 0 30px;
}
.NavBar > .menu > span:hover {
  cursor: pointer;
  text-decoration: underline;
}
.NavBar>hr{
  height: 1px;
  background: #bbb;
  background-image: -webkit-linear-gradient(left, #eee, #777, #eee);
  background-image: -moz-linear-gradient(left, #eee, #777, #eee);
  background-image: -ms-linear-gradient(left, #eee, #777, #eee);
  background-image: -o-linear-gradient(left, #eee, #777, #eee);
} 
</style>