<script>
import AppAccording from '../components/AppAccording.vue';
import AppCaroselCit from '../components/AppCaroselCit.vue';

export default {
    name: 'OurTeam',
    components: {
        AppCaroselCit,
        AppAccording
    }
}
</script>

<template>
    <AppCaroselCit />
    <AppAccording />
</template>

<style lang="scss" scoped></style>