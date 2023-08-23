<template>
  <div class="postView">
    <div class="meta">
      <h3 class="title">{{ getPageInfo().title }}</h3>
      <p class="date">
        {{ getPageInfo().date }}
      </p>
      <span class="tag" v-for="(tag, i) in getPageInfo().tags" :key="i" :style="`background-color:#${$store.state.backgroundColor[tag.color]
        }; color:#${$store.state.textColor[tag.color]};`">{{ tag.name }}</span>
      <hr>
    </div>

    <block-object v-for="(data, i) in $store.state.blocks[$route.params.page_id]" :key="i" :data="data" />
  </div>
</template>

<script>
import BlockObject from "./BlockObject.vue";
export default {
  name: "PostView",
  components: {
    BlockObject,
  },
  methods: {
    getPageInfo() {
      const result = { title: "title", date: "date", tags: [] };
      const page = this.$store.state.postList.filter((element) => {
        if (element.id == this.$route.params.page_id) {
          return true;
        }
      });
      if (page.length > 0) {
        const info = page[0].properties;
        result.title = info.Page.title[0].plain_text;
        const kst = new Date(info.Created.created_time);
        result.date = `${kst.getFullYear()}-${String(kst.getMonth()).padStart(
          2,
          "0"
        )}-${String(kst.getDate()).padStart(2, "0")}`;
        result.tags = info.Tags.multi_select;
      }
      return result;
    },
  },
  created() {
    if (!this.$store.state.blocks[this.$route.params.page_id])
      this.$store.dispatch("getBlock", this.$route.params.page_id);
  },
};
</script>

<style>
.postView {
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
}

.postView>.meta {
  font-family: "NanumBarunPen";
  padding: 5px;
}

.postView>.meta>.title {
  font-size: 30px;
  margin: 0;
}

.postView>.meta>.date {
  color: black;
  font-size: 18px;
  margin: 0;
}

.postView>.meta>.tag {
  font-size: 14px;
  margin-right: 5px;
  letter-spacing: 0.5px;
  padding: 1px 6px;
  background-color: antiquewhite;
  color: black;
  border-radius: 5px;
}

.postView>.meta>hr {
  border-top: 1px dashed #bbb;
  margin-top: 10px;
}

.child {
  min-height: 21px;
  padding: 3px 2px;
}

.child>.paragraph {
  font-size: 16px;
  margin: 0;
}

.child>.heading_1 {
  font-size: 30px;
  margin: 20px 0 0 0;
}

.child>.heading_2 {
  font-size: 24px;
  margin: 15px 0 0 0;
}

.child>.heading_3 {
  font-size: 20px;
  margin: 10px 0 0 0;
}

.child>.image {
  max-width: 100%;
}

.child>.to_do>.checked {
  text-decoration: line-through;
  opacity: 0.65;
}

.child>.code {
  background-color: #f7f6f3;
  border-radius: 3px;
  font-size: 13.6px;
  padding: 34px 16px 32px 32px;
  font-family: "NanumGothicCoding";
}

.child>.bookmark {
  overflow-y: auto;
  width: 100%;
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(55, 53, 47, 0.16);
  border-radius: 3px;
}

.child>.bookmark:hover {
  background-color: #efefef;
  cursor: pointer;
}

.child>.bookmark>.meta {
  flex-basis: 450px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 14px 14px;
}

.bookmark>.meta>.title {
  font-size: 16px;
  color: #37352f;
  margin-bottom: 2px;
  height: 26px;
}

.bookmark>.meta>.description {
  word-wrap: break-word;
  font-size: 14px;
  height: 32px;
  color: #37352fa6;
  vertical-align: top;
}

.bookmark>.meta>.footer {
  height: 24px;
  display: flex;
  align-items: center;
}

.bookmark>.meta>.footer>img {
  width: 16px;
  margin-right: 6px;
}

.bookmark>.meta>.footer>.url {
  font-size: 12px;
  width: 100%;
  word-wrap: break-word;
}

.bookmark>.thumbnail {
  border-radius: 1px;
  width: 250px;
  height: 110px;
  background-size: cover;
  background-position: center center;
}

.child>.toggle>.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 5px;
}

.child>.toggle>.icon:hover {
  background-color: #7777;
}

.child>.toggle>.icon>svg {
  width: 12px;
  height: 12px;
  margin: 0 6px;
  fill: inherit;
  flex-shrink: 0;
  transition: transform 200ms ease-out 0s;
  transform: rotateZ(90deg);
  opacity: 1;
}

.child>.toggle>.icon>.open {
  transform: rotateZ(180deg);
}

.child>.toggle>.icon>svg:hover {
  cursor: pointer;
}

.child>.callout {
  display: flex;
  background-color: #f7f6f3;
  border-radius: 3px;
  padding: 16px 16px 16px 12px;
}

.child>.callout>.icon {
  display: inline-block;
  width: 30px;
}

.child>.callout>.icon>img {
  width: 21px;
  height: 22px;
}

.child>.table {
  border: 1px solid black;
  border-collapse: collapse;
}

.child>.table>tr {
  border: 1px solid black;
}

.child>.table>tr>td {
  border: 1px solid black;
  padding: 7px 9px;
}

.child.quote {
  border-style: none none none solid;
  border-color: black;
  border-width: 3px;
  margin-left: 12px;
}

.child>.quote {
  margin-left: 12px;
  padding: 3px 2px;
}

.childrenDiv {
  padding-left: 24px;
}

.child.quote>.childrenDiv {
  padding-left: 12px;
}

/* 이하는 highlightCode용 */

pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em;
}

code.hljs {
  padding: 3px 5px;
}

.hljs {
  background: #f3f3f3;
  color: #444;
}

.hljs-comment {
  color: #697070;
}

.hljs-punctuation,
.hljs-tag {
  color: #444a;
}

.hljs-tag .hljs-attr,
.hljs-tag .hljs-name {
  color: #444;
}

.hljs-attribute,
.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-name,
.hljs-selector-tag {
  color: #07a;
}

.hljs-deletion,
.hljs-number,
.hljs-quote,
.hljs-selector-class,
.hljs-selector-id,
.hljs-string,
.hljs-template-tag,
.hljs-type {
  color: #800;
}

.hljs-section,
.hljs-title {
  color: #800;
  font-weight: 700;
}

.hljs-link,
.hljs-operator,
.hljs-regexp,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-symbol,
.hljs-template-variable,
.hljs-variable {
  color: #ab5656;
}

.hljs-literal {
  color: #695;
}

.hljs-addition,
.hljs-built_in,
.hljs-bullet,
.hljs-code {
  color: #690;
}

.hljs-meta {
  color: #1f7199;
}

.hljs-meta .hljs-string {
  color: #38a;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: 700;
}</style>