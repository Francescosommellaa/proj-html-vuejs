<script>

import AppCardOffer from '../components/AppCardOffer.vue';
import AppProgres from '../components/AppProgres.vue';
import AppTabs from '../components/AppTabs.vue';

export default {
    name: 'WhatWeOffer',
    components: {
        AppTabs,
        AppProgres,
        AppCardOffer
    }
}
</script>

<template>

    <div class="row">
        <div class="col-6"></div>
        <div class="col-6">
            <AppTabs />
        </div>
    </div>
    <div class="row">
        <div class="col-6"></div>
        <div class="col-6">
            <AppProgres />
        </div>
    </div>
    <AppCardOffer />
</template>

<style lang="scss" scoped></style>