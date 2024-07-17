<script>
import AppAccording from '../components/AppAccording.vue';
import AppCardTeam from '../components/AppCardTeam.vue';
import AppCaroselCit from '../components/AppCaroselCit.vue';

export default {
    name: 'OurTeam',
    components: {
        AppCaroselCit,
        AppAccording,
        AppCardTeam
    }
}
</script>

<template>
    <AppCardTeam />
    <AppCaroselCit />
    <AppAccording />
</template>

<style lang="scss" scoped></style>