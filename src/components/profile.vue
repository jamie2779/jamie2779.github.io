<template>
  <div class="profile_container">
    <h1 class="title">Profile</h1>
    <img class="kuromi1" src="../img/kuromi1.png" alt="" />
    <img class="profile_image" src="../img/killerwhale.jpg" alt="" />
    <img class="kuromi1" src="../img/kuromi1.png" alt="" />
    <h4>박재민(boring_jam_)</h4>
    <p>
      개발 공부하는 학생인데 이사이트는 친구 가르쳐주면서 임시로 만든거라 이 꼬라지임, 나중에 바꿀거임, 난 쿠로미 별로 안좋아함
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

.profile_image {
  width:20vw;
  height:20vw;
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
  border: solid #707070 1px;
  margin: 20px 20px;
}

.kuromi1 {
  width:30vw;
  height:30vw;
  max-width: 200px;
  max-height: 200px;
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

.sns_image:hover{
  cursor: pointer;
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