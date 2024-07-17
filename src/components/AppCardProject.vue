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
    <div v-for="(item, index) in store.illustrations" :key="index" class="card">
        <img :src="item.pic" alt="Illustration" />
        <div class="text">
            {{ item.title }}
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

.card {
    width: calc(100% / 3);

    .text {
        height: 40px;
        width: 80px;
        background-color: #fff;
    }
}

</style>