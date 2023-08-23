<template>
  <div class="projects">
    <h1>Projects</h1>

    <div v-for="(project, i) in $store.state.projectList" :key="i" class="project_cell"
      :class="[project.properties.Type.select.name]" @click="openProject(project)">
      <div :style="getThumbnailStyle(project)" class="thumbnail"></div>
      <div class="meta">
        <p class="type">{{ project.properties.Type.select.name }}</p>
        <h3 class="title">{{ project.properties.Title.title[0]?.plain_text }}</h3>
        <p class="description">
          {{ project.properties.Description.rich_text[0]?.plain_text }}
        </p>
        <p class="date">
          {{ project.properties.Date.date?.start }}
        </p>
        <span class="tag" v-for="(tag, i) in project.properties.Tags.multi_select" :key="i"
          :style="`background-color:#${$store.state.backgroundColor[tag.color]}; color:#${$store.state.textColor[tag.color]};`">{{
            tag.name }}</span>
      </div>
    </div>

    <p style="text-align: center;">etc.</p>

  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  methods: {
    openProject(project) {
      switch (project.properties.Type.select.name) {
        case "page":
          this.$router.push(`/Project/${project.id}`);
          break;
        case "redirect":
          window.open(project.properties.URL.url);
          break;
      }
    },
    getThumbnailStyle(project) {
      if (project.properties.Image.files[0]) {
        return `background-image:url(${project.properties.Image.files[0].file.url})`
      } else {
        return "";
      }

    }
  }
}
</script>

<style>
.projects {
  font-family: "NanumBarunPen";
  letter-spacing: 0.5px;
  padding: 0 20px;



}

.projects>h1 {
  text-align: center;
}

.project_cell {
  border:1px solid #bbb;
  width: 320px;
  background-color: whitesmoke;
  border-radius: 5px;
  display: inline-block;
  margin: 9px;
}

.project_cell:hover {
  background-color: #efefef;
}

.thumbnail {
  background-color: gray;
  height: 160px;
  background-size: cover;
  background-position: center;
  border-radius: 5px;

}

.project_cell>.meta {
  padding: 10px;
}

.project_cell>.meta>.type {
  color: gray;
  margin: 0;
}

.project_cell>.meta>.title {
  font-size: 26px;
  margin: 0;
}

.project_cell>.meta>.description {
  color: gray;
  font-size: 18px;
  margin: 0;
}

.project_cell>.meta>.date {
  color: gray;
  font-size: 16px;
  margin: 0;
}

.project_cell>.meta>.tag {
  display: inline-block;
  font-size: 14px;
  margin-right: 5px;
  letter-spacing: 0.5px;
  padding: 1px 6px;
  background-color: antiquewhite;
  color: black;
  border-radius: 5px;
}
</style>