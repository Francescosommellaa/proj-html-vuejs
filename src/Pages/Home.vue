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
   <div class="row my-5 align-items-center justify-content-center">
    <div class="col-8">
        <AppCardOffer />
    </div>
   </div>
   
</template>

<style lang="scss" scoped>
h2 {
    color: black;
}
</style>
