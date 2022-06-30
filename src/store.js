import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

        navigation: [
            {
                title: "Projects",
                open: false,
                subnav: [
                    {
                        title: "Vue.js",
                        open: false,
                        subnav: [
                            { title: "Transitions" },
                            { title: "Components" },
                            { title: "Slots" }
                        ]
                    },
                    {
                        title: "SCSS",
                        open: false,
                        subnav: [
                            { title: "Nesting" },
                            { title: "Mixins" }
                        ]
                    },
                    { title: "JavaScript" },
                    { title: "Webpack" }
                ]
            },
            {
                title: "Portfolio",
                open: false,
                subnav: [
                    { title: "Websites" },
                    { title: "Open Source" }
                ]
            },
            { title: "Resources" },
            {
                title: "Timeline",
                open: false,
                subnav: [
                    { title: "2017" },
                    { title: "2018" },
                    { title: "2019" }
                ]
            },
            { title: "Documentation" }
        ]
    },
    getters: {
        navigation: state => {
            return state.navigation;
        }
    }
});