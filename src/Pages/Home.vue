<script>
import AppCardOffer from '../components/AppCardOffer.vue';
import AppCardProject from '../components/AppCardProject.vue';
import AppCarosel from '../components/AppCarosel.vue';
import AppWorkContacts from '../components/AppWorkContacts.vue';
import AppWorkingProcess from '../components/AppWorkingProcess.vue';

export default {
    name: 'Home',
    components: {
        AppCarosel,
        AppWorkingProcess,
        AppWorkContacts,
        AppCardOffer,
        AppCardProject,
    }
}
</script>

<template>
    <AppCarosel />
    <AppCardProject/>
    <AppWorkingProcess />
    <AppWorkContacts />
    <AppCardOffer />
</template>

<style lang="scss" scoped>
h2 {
    color: black;
}
</style>
