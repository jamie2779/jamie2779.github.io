<template>
  <div class="projects_container">
    <h1 class="title">project</h1>

    <div v-for="(project, i) in projectData" :key="i" class="project_cell">
      <div :style="`background-image:url(${project.image})`" class="thumbnail" ></div>
      <h1>{{project.name}}</h1>
      <p>{{project.tag}}</p>
      <button @click="gotoLink(project.url)">이동하기</button>
    </div>

  </div>
</template>

<script>

import projectData from "../projectData.js"

export default {
  name: "projectsComponent",
  data(){
    return{
        projectData
    }
  },
  methods:{
    gotoLink(url){
      window.location.href=url
    }
  }
};
</script>

<style>
.projects_container{
    text-align: center;
    width: 90%;
    margin:0 5%;
    
}

.project_cell{
    width: 300px;
    height: 270px;
    background-color: white;
    text-align: left;
    
    display:inline-block;
    margin: 20px;
}

.thumbnail{
    background-color: aquamarine;
    height: 180px;
    background-size:cover;
    background-position: center;
}

.project_cell>h1{
    font-family: 'NanumSquareRound';
    font-size: 18px;
    font-weight: bolder;
    margin: 10px 0 3px 10px;    
}

.project_cell>p{
    font-family: 'NanumSquareRound';
    font-size: 12px;
    font-weight: bold;
    color: #4f1cff;
    margin: 0 10px;  
}

.project_cell>button{
    float: right;
    width: 120px;
    height: 30px;
    background-color: white;
    border-radius: 15px;
    margin-right: 10px;
    font-size: 12px;
    font-family: 'NanumSquareRound';
    font-weight: bolder;

}
</style>