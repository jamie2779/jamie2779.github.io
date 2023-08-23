<template>
  <h1 v-if="$store.state.postList.length == 0" class="loading_msg">
    Now Loading...
  </h1>
  <div v-for="(post, i) in $store.state.postList" :key="i">
    <div class="post" @click="$router.push(`/Post/${post.id}`)">
      <h3 class="title">{{ post.properties.Page.title[0].plain_text }}</h3>
      <p class="description">
        {{ post.properties.Description.rich_text[0].plain_text }}
      </p>
      <p class="date">
        {{ utc2kst(post.properties.Created.created_time)}}
      </p>
      <span
        class="tag"
        v-for="(tag, i) in post.properties.Tags.multi_select"
        :key="i"
        :style="`background-color:#${$store.state.backgroundColor[tag.color]}; color:#${$store.state.textColor[tag.color]};`"
        >{{ tag.name }}</span
      >
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods:{
    utc2kst(utc){
        const kst = new Date(utc);
        return `${kst.getFullYear()}-${String(kst.getMonth()).padStart(2,"0")}-${String(kst.getDate()).padStart(2,"0")}`
    }
  },
};
</script>

<style>
.loading_msg {
  font-family: "NanumBarunPen";
  letter-spacing: 1px;
}
.post {
  font-family: "NanumBarunPen";
  padding: 5px;
}
.post > .title {
  font-size: 30px;
  margin: 0;
}
.post > .description{
  color: gray;

  font-size: 20px;
  margin: 0;
}
.post > .date {
  color: black;
  font-size: 16px;
  margin: 0;
}
.post > .tag {
  font-size: 14px;
  margin-right: 5px;
  letter-spacing: 0.5px;
  padding: 1px 6px;
  background-color: antiquewhite;
  color: black;
  border-radius: 5px;
}

.post:hover,
.post:focus {
  animation-duration: 3s;
  animation-name: rainbowLink;
  animation-iteration-count: infinite;
  cursor: pointer;
}
@keyframes rainbowLink {
  0% {
    color: #ff2a2a;
  }
  15% {
    color: #ff7a2a;
  }
  30% {
    color: #ffc52a;
  }
  45% {
    color: #43ff2a;
  }
  60% {
    color: #2a89ff;
  }
  75% {
    color: #202082;
  }
  90% {
    color: #6b2aff;
  }
  100% {
    color: #e82aff;
  }
}
</style>