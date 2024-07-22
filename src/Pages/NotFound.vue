<script>
import { store } from '../store';

export default {
    name: "NotFound",
    data() {
        return {
            store
        }
    },
    mounted() {
        this.cursor()
    }
}


</script>

<template>
    <h2>Page Not Found</h2>


</template>

<style lang="scss" scoped>
h2 {
    color: black;
}
</style>
