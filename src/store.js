import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
    state() {
        return {
            proxy: process.env.VUE_APP_CORS_PROXY,
            postList: [],
            blocks: {},
            projectList: [],
            textColor: {
                default: "37352F",
                gray: "9B9A97",
                brown: "64473A",
                orange: "D9730D",
                yellow: "DFAB01",
                green: "0F7B6C",
                blue: "0B6E99",
                purple: "6940A5",
                pink: "AD1A72",
                red: "E03E3E",
            },
            backgroundColor: {
                default: "FFFFFF",
                gray: "EBECED",
                brown: "E9E5E3",
                orange: "FAEBDD",
                yellow: "FBF3DB",
                green: "DDEDEA",
                blue: "DDEBF1",
                purple: "EAE4F2",
                pink: "F4DFEB",
                red: "FBE4E4",
            }

        }
    },
    mutations: {
        setPostList(store, data) {
            store.postList = data;
        },
        setBlock(store, data) {
            store.blocks[data.key] = data.value;
        },
        setProjectList(store, data) {
            store.projectList = data;
        }
    },
    actions: {
        getPostList(store) {
            axios
                .post(
                    `${store.state.proxy}https://api.notion.com/v1/databases/14328d44107949dab6d9ce8cdc05ffbd/query`,
                    {
                        page_size: 100,
                    },
                    {
                        headers: {
                            Authorization: process.env.VUE_APP_NOTION_API_KEY,
                            "Notion-Version": "2022-06-28",
                        },
                    }
                )
                .then((res) => {
                    store.commit("setPostList", res.data.results);
                    console.log("getPostList");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getBlock(store, block_id) {
            axios
                .get(
                    `${store.state.proxy}https://api.notion.com/v1/blocks/${block_id}/children`,
                    {
                        headers: {
                            Authorization: process.env.VUE_APP_NOTION_API_KEY,
                            "Notion-Version": "2022-06-28",
                        },
                    }
                )
                .then((res) => {
                    store.commit("setBlock", { key: block_id, value: res.data.results })
                    console.log(`getBlock: ${block_id}`)

                })
                .catch((err) => {
                    console.log(err);
                });

        },
        getProjectList(store) {
            axios
                .post(
                    `${store.state.proxy}https://api.notion.com/v1/databases/741cebc98208448d937d425608951e43/query`,
                    {
                        page_size: 100,
                    },
                    {
                        headers: {
                            Authorization: process.env.VUE_APP_NOTION_API_KEY,
                            "Notion-Version": "2022-06-28",
                        },
                    }
                )
                .then((res) => {
                    store.commit("setProjectList", res.data.results);
                    console.log("getProjectList");
                    console.log(res.data.results)
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    }
})

export default store