<script>
import { store } from '../store'

export default {
    name: 'AppCardProject',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
<div class="container-card d-flex flex-wrap">
    <div v-for="(item, index) in store.team" :key="index" class="ms-card">
        <img :src="item.pic" alt="illustration" />
        <div class="text">
            {{ item.name }}
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

.ms-card {
    width: calc(100% / 4);
    position: relative;
    cursor: pointer;
    overflow: hidden;

    .text {
        width: 100px;
        background-color: #fff;
        position: absolute;
        left: -50%;
        bottom: 5px;
        padding: 0.5em;
        transition: left 0.5s ease;

        a {
            text-decoration: none;
            color: black;
        }
    }
    
    &:hover .text{
        left: 0;
    }
}

</style>