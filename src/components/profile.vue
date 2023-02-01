<template>
  <div class="profile_container">
    <h1 class="title">Profile</h1>
    <img class="kuromi1" src="../img/kuromi1.png" alt="" />
    <img class="profile_image" src="../img/killerwhale.jpg" alt="" />
    <img class="kuromi1" src="../img/kuromi1.png" alt="" />
    <h4>황동현(kind_killerwhale)</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit rem
      a magni laborum unde ducimus repellat! Accusamus modi eaque at eum
      officiis autem vel, sint rem, vero, doloribus reprehenderit! Lorem ipsum,
      dolor sit amet consectetur adipisicing elit. Repellendus pariatur beatae
      labore expedita deleniti velit. Magni rem, accusantium quibusdam autem
      officiis explicabo, quaerat, repellendus sunt nam velit est adipisci
      aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      dolorem temporibus assumenda alias id, vero labore sunt iste blanditiis
      sint quaerat ducimus corrupti, excepturi quasi ut omnis non, nesciunt
      amet!
    </p>
    <img class="sns_image" src="../img/instagram.png" @click="gotoLink('https://www.instagram.com/j_min__04_/')"/>
    <div class="line"></div>
    <img class="sns_image" src="../img/github.png" @click="gotoLink('https://github.com/jamie2779')" />
    <div class="line"></div>
    <img class="sns_image" src="../img/mail.png" @click="gotoLink('mailto:jamie2779@naver.com')"/>
    <hr />
  </div>
</template>

<script>
export default {
  name: "profileComponent",
  methods:{
    gotoLink(url){
        window.open(url)
    },
  }

};
</script>

<style>
.profile_container {
  text-align: center;
}

.title {
  font-size: 45px;
  font-family: "ccsignlanguage", sans-serif;
  margin: 20px 0px 0px 0px;
}

.profile_image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: solid #707070 1px;
  margin: 25px 20px;
}

.kuromi1 {
  width: 200px;
  height: 200px;
}

.profile_container > h4 {
  font-size: 24px;
  margin: 10px 0px;
  font-family: "NanumSquareRound";
}

.profile_container > p {
  font-size: 15px;
  max-width: 60%;
  margin: 0 20% 10px 20%;
  font-family: "NanumBarunPen";
}

.sns_image {
  width: 30px;
  height: 30px;
}

.line {
  display: inline-block;
  width: 2px;
  height: 30px;
  background-color: black;
  margin: 0 5px;
}

hr {
  width: 90%;
  margin-top: 10px;
}
</style>