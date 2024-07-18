<script>
import { store } from '../store'
export default {
    name: 'AppSideNav',
    data() {
        return {
            store,
        }
    },
};
</script>

<template>
    <div class="arrow">
        <i class="fa-solid fa-arrow-up"></i>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

.arrow{
    background-color: $backgroud-color8;
    width: fit-content;
    cursor: pointer;
    padding: 30px;
    font-size: 30px;
    position: fixed;
    bottom: 10px;
    right: 20px;
    color: white;
    z-index: 500;
    // bottom: 10px;
    
}

</style>