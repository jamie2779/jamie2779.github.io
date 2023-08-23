<template>
  <div class="profile">
    <img class="profile_image" src="@/assets/profile.jpg" alt="picture of me" />
    <h2>박재민(@boring_jam_)</h2>
    <p>Data Scientist, YeoungNam Univ.</p>
  </div>
  <div class="info">
    <h3>Comment</h3>
    <span
      @mouseover="ChangeLanguage()"
      @mouseout="language = 'HTML로 코딩합니다.'"
    >
      전 {{ language }}
    </span>
    <span>
      <br />
      코딩은 취미였는데...
    </span>

    <h3>Contect</h3>
    <li>Email: <a href="mailto:jamie2779@naver.com">jamie2779@naver.com</a></li>
    <li>
      github:
      <a href="https://github.com/jamie2779">https://github.com/jamie2779</a>
    </li>
    <li>
      instagram:
      <a href="https://www.instagram.com/boring_jam_/">@boring_jam_</a>
    </li>
    <li>
      tistory: <a href="https://jamie2779.tistory.com/">심심한 개발기록장</a>
    </li>

    <h3>History</h3>
    <li>대구광역시 서부교육치원청 영재교육원 수료(2016-2018)</li>
    <li>KAIST 사이버영재교육원 C언어 레벨 1,2 수료(2018-2019)</li>
    <li>KAIST 사이버영재교육원 Python 레벨 1 수료(2019)</li>
    <li>대구과학영재교육원 수학과정 수료(2019)</li>
    <li>발명품 경진대회 수상작 특허 출원 [출원번호: 10-2020-0014835] (2020.02.07)</li>

    <h3>Awards</h3>
    <li>제41회 전국학생과학발명품경진대회 특상</li>
    <li>2020 고등학생 양자암호통신 아이디어 공모전 수상</li>
    <li>2023 Woori 코딩페스티벌 코딩 경진대회 성인부 본선</li>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  methods: {
    ChangeLanguage() {
      const lan_list = [
        "C로 코딩합니다.",
        "C++를 써봤습니다.",
        "C#를 써봤습니다.",
        "Python을 주로 사용합니다.",
        "Vue.js를 사용합니다.",
        "JS를 사용합니다.",
        "Brainfuck을 써봤습니다...?",
        "Lua를 써봤습니다.",
        "Pandas를 사용합니다.",
        "Numpy를 사용합니다.",
        "Tensorflow를 써봤습니다.",
        "Pytorch를 사용합니다.",
      ];
      this.language = lan_list[Math.floor(Math.random() * lan_list.length)];
    },
  },
  data() {
    return {
      language: "HTML로 코딩합니다.",
    };
  },
};
</script>

<style>
.profile {
    margin-top: 15px;
  display: grid;
  grid-template-columns: 100px auto;
}

.profile > .profile_image {
  grid-row: 1/3;
  margin-left: 15px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: solid #707070 1px;
}

.profile > h2 {
  grid-column: 2;
  display: inline-block;
  font-size: 28px;
  margin: 5px 0 0 0;
  font-family: "NanumSquareRound";
}

.profile > p {
  grid-column: 2;
  font-size: 16px;
  margin: 0;
  font-family: "NanumBarunPen";
}

.info {
  margin-left: 15px;
  letter-spacing: 0.5px;
  font-family: "NanumBarunPen";
}
.info > h3 {
  margin: 24px 0 12px 0;
  font-size: 24px;
}
.info > span {
  font-size: 18px;
}
.info > span:hover {
  cursor: default;
}
.info > li {
  margin-bottom: 5px;
  font-size: 18px;
}
.info > li > a:link {
  color: gray;
  text-decoration: none;
}

.info > li > a:visited {
  color: gray;
  text-decoration: none;
}
.info > li > a:hover {
  color: darkgray;
  text-decoration: underline;
}
.info > li > a:active {
  color: darkgray;
  text-decoration: none;
}
</style>