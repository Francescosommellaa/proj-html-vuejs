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
        <div v-for="(item, index) in store.team" :key="index" class="ms-card hover-area">
            <img :src="item.pic" alt="illustration" />
            <div class="text">
                <h4>{{ item.name }}</h4>
                <em :class="'ms-underline' + ' ' + item.color">{{ item.role }}</em>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.ms-card {
    width: calc(100% / 4);
    position: relative;
    cursor: pointer;
    overflow: hidden;

    .text {
        width: 70%;
        background-color: #fff;
        position: absolute;
        left: -80%;
        bottom: 20px;
        padding: 1em 0.5em;
        transition: left 0.5s ease;
    }

    &:hover .text {
        left: 0;
    }
}
</style>
