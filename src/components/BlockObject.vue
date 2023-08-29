<template>
    <tr v-if="data.type == 'table_row'" class="table_row">
        <td v-for="(cell, i) in data.table_row.cells" :key="i">
            {{cellParse(cell)}}
        </td>
    </tr>
  <div v-else class="child" :class="{quote:data.type == 'quote'}">
    <p v-if="data.type == 'paragraph'" class="paragraph">
      {{ getPlainText() }}
    </p>
    <h2 v-else-if="data.type == 'heading_1'" class="heading_1">
      {{ getPlainText() }}
    </h2>
    <h3 v-else-if="data.type == 'heading_2'" class="heading_2">
      {{ getPlainText() }}
    </h3>
    <h4 v-else-if="data.type == 'heading_3'" class="heading_3">
      {{ getPlainText() }}
    </h4>
    <li
      v-else-if="data.type == 'bulleted_list_item'"
      class="bulleted_list_item"
    >
      {{ getPlainText() }}
    </li>

    <li
      v-else-if="data.type == 'numbered_list_item'"
      class="numbered_list_item"
    >
      {{ getPlainText() }}
    </li>

    <span v-else-if="data.type == 'quote'" class="quote">{{ getPlainText() }}</span>
    <hr v-else-if="data.type == 'divider'" class="divider" />
    <img
      v-else-if="data.type == 'image'"
      class="image"
      :src="data.image.file.url"
    />

    <div v-else-if="data.type == 'to_do'" class="to_do">
      <input type="checkbox" v-model="checked" disabled />
      <span :class="{ checked: data.to_do.checked }">{{ getPlainText() }}</span>
    </div>

    <div
      v-else-if="data.type == 'code'"
      class="code"
      v-html="
        highlightText(getPlainText(), data.code.language).replace(/\n/g, '<br>')
      "
    />

    <div
      v-else-if="data.type == 'bookmark'"
      class="bookmark"
      @click="openURL(data.bookmark.url)"
    >
      <div class="meta">
        <span class="title" v-if="bookmarkData?.title">{{
          bookmarkData.title
        }}</span>
        <span class="title" v-else>{{
          String(data.bookmark.url).split("/")[2]
        }}</span>
        <span class="description" v-if="bookmarkData?.description">{{
          bookmarkData.description
        }}</span>
        <div class="footer">
          <img
            :src="`https://s2.googleusercontent.com/s2/favicons?domain=${data.bookmark.url}`"
          />
          <span class="url">{{ data.bookmark.url }}</span>
        </div>
      </div>
      <div
        class="thumbnail"
        v-if="bookmarkData?.image"
        :style="`background-image:url('${bookmarkData.image}')`"
      />
    </div>

    <div v-else-if="data.type == 'toggle'" class="toggle">
      <div class="icon" @click="toggle()">
        <svg
          role="graphics-symbol"
          viewBox="0 0 100 100"
          :class="{ open: isToggleOpen }"
        >
          <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
        </svg>
      </div>

      <!-- <svg role="graphics-symbol" viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em; display: block; fill: inherit; flex-shrink: 0; transition: transform 200ms ease-out 0s; transform: rotateZ(180deg); opacity: 1;"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg> -->
      <span>{{ getPlainText() }}</span>
    </div>

    <div v-else-if="data.type == 'callout'" class="callout">
        <div class="icon">
            <span v-if="data.callout.icon.type == 'emoji'">{{data.callout.icon.emoji}}</span>
            <img v-if="data.callout.icon.type == 'external'" :src="data.callout.icon.external.url">
            <img v-if="data.callout.icon.type == 'file'" :src="data.callout.icon.file.url">
            </div>
        <span v-html="getPlainText().replace(/\n/g,'<br>')"></span>

    </div>

    
    <table v-if="data.type == 'table'" class="table">
        <block-object
        v-for="(data, i) in $store.state.blocks[data.id]"
        :key="i"
        :data="data"
      />
    </table>

    <div
      class="childrenDiv"
      v-else-if="
        $store.state.blocks[data.id] &&
        !(data.type == 'toggle' && !isToggleOpen)
      "
    >
      <block-object
        v-for="(data, i) in $store.state.blocks[data.id]"
        :key="i"
        :data="data"
      />
    </div>
  </div>
</template>

<script>
import BlockObject from "./BlockObject.vue";
import hljs from "highlight.js";
var mtps = require("html-metadata-parser");

export default {
  name: "BlockObject",
  components: {
    BlockObject,
  },
  methods: {
    highlightText(text, language) {
      try {
        return hljs.highlight(text, { language }).value;
      } catch (err) {
        return text;
      }
    },
    getPlainText() {
      return this.data[this.data.type].rich_text[0]?.plain_text ?? "";
    },
    async getUrlMeta(url) {
      try {
        const result = await mtps.parse(url);
        let data = {};
        if (result?.og?.title) data.title = result.og.title;
        if (result?.og?.description) data.description = result.og.description;
        if (result?.og?.image) data.image = result.og.image;
        this.bookmarkData = data;
      } catch (err) {
        return null;
      }
    },
    openURL(url) {
      window.open(url);
    },
    toggle() {
      if (this.isToggleOpen) this.isToggleOpen = false;
      else this.isToggleOpen = true;
    },
    cellParse(cell){
        if(cell[0]){
            return cell[0].plain_text;
        }else{
            return "";
        }
    }
  },
  data() {
    return {
      checked: this.data?.to_do?.checked,
      bookmarkData: {},
      isToggleOpen: false,
    };
  },
  props: {
    data: Object,
  },
  created() {
    if (this.data.has_children) {
      if (!this.$store.state.blocks[this.data.id])
        this.$store.dispatch("getBlock", this.data.id);
    }
    if (this.data.type == "bookmark") {
      this.getUrlMeta(`${this.$store.state.proxy}${this.data.bookmark.url}`);
    }
  },
};
</script>

<style>
/* 블럭오브젝트에 대한 스타일링은 Class 선택자로 PostView에 일괄적으로 작성함 */
</style>