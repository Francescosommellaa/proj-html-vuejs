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
    <div class="row px-3 mb-0 d-flex align-items-center justify-content-center">
        <div class="col-4 mb-5">
            <img src="/public/h-2-port-img-6.jpg" alt="">
        </div>
        <div class="col-4 pt-5 ps-5 mb-5">
            <AppTabs />
        </div>
    </div>
    <div class="row px-3  d-flex  align-items-center justify-content-center ">
        <div class="col-4 pe-5">
            <h3>Vibes loving <strong>intro</strong></h3>
            <p>Mundi dolore molestie cu qui, duo homero accumsan eligendi cu. Id nam posse ocurreret disputando, ad
                sed
                nihil eirmod theophrastus. Ut civibus noluisse ocurreret mel, duo bonorum accusamus torquatos id.
                Viris
                voluptaria vituperata et quo, putent bonorum nam in. Prodesset signiferumque nec an. Aenean massa.
                Cum
                sociis Theme natoque penatibus et magnis dis parturient montes, nascetur.</p>
        </div>
        <div class="col-4">
            <AppProgres />
        </div>
    </div>
    <AppCardOffer />
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

img {

    width: 100%;
    aspect-ratio: 1/0.8;

}
</style>