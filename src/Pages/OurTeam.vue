<script>
import AppAccording from '../components/AppAccording.vue';
import AppCardTeam from '../components/AppCardTeam.vue';
import AppCaroselCit from '../components/AppCaroselCit.vue';
import AppCharacterDesign from '../components/AppCharacterDesign.vue';

export default {
    name: 'OurTeam',
    components: {
        AppCaroselCit,
        AppAccording,
        AppCardTeam,
        AppCharacterDesign
    }
}
</script>

<template>
    <AppCardTeam />
    <AppCaroselCit />
    <AppAccording />
    <AppCharacterDesign />

</template>

<style lang="scss" scoped>

</style>