<script>
import { store } from "../store";

export default {
    name: "AppCardProject",
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="container-card d-flex flex-wrap">
        <div v-for="(item, index) in store.illustration" :key="index" class="ms-card">
            <img :src="item.pic" alt="illustration" />
            <div class="text">
                <a href="#">
                    <h2>{{ item.title }}</h2>
                    <em>{{ item.tip }}</em>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.ms-card {
    width: calc(100% / 3);
    position: relative;
    cursor: pointer;
    overflow: hidden;

    .text {
        width: 80%;
        background-color: #fff;
        position: absolute;
        left: -100%;
        bottom: 30%;
        padding: 2em 0.5em;
        transition: left 0.5s ease;

        a {
            text-decoration: none;
            color: black;
        }

        h2 {
            width: 180px;
        }
    }

    &:hover .text {
        left: 0;
    }
}
</style>
