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

    <!-- titolo -->
    
        <div class="row align-items-center justify-content-center title">
            <div class="col-2">
                <h3>What we <span>offer</span> </h3>
            </div>
        </div>
    
    

<!-- sezione animation -->
    <div class="row px-3 mb-0 d-flex align-items-center justify-content-center">
        <div class="col-3 mb-5">
            <img src="/public/h-2-port-img-6.jpg" alt="">
        </div>
        <div class="col-4 pt-5 ps-5 mb-5">
            <AppTabs />
        </div>
    </div>

    <!-- sezione vibes loving -->
    <div class="row px-3  d-flex  align-items-center justify-content-center ">
        <div class="col-3 pe-5">
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
      
        
        <div class="row align-items-center justify-content-center">
            <div class="col-7">
                <AppCardOffer />
            </div>
        </div>
        
    </div>
    
    

    <!-- sezione newsletter -->

    <div class="row align-items-center justify-content-center">
        <div class="col-7">
            
                <div class="row title align-items-center justify-content-center">
                    <div class="col-6">
                        <h4>Subscribe to our <span>newsletter</span></h4>
                        <form action="#">
                            <input type="email" name="mail" id="mail" placeholder="Your E-mail">
                            <div class="ms_btn">send</div>

                        </form>
                    </div>
                </div>
            
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

.title{
    background-image: url('../../public/h-2-background-1.jpg');
    height: 300px;
    margin-bottom: 3%;
}

img {

    width: 100%;
    aspect-ratio: 1/0.8;

}

h3{
    font-size: 50px;
    font-weight: 500;
    span{
        font-family: italic;
        font-weight: 900;
    }

    
}

h4{
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    span{
        font-family: italic;
        font-weight: 900;
    }
}

#mail{
    background-color: rgb(250, 247, 242) ;
    border: 2px solid $border2;
    width: 70%;
    line-height: 30px;
    padding: 10px;
  
}

textarea:focus, input:focus{
    outline: none;
}

.ms_btn {
       
        background-color: $backgroud-color8;
        width: fit-content;
        padding: 10px 50px;
        align-content: center;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
        display: inline-block;
        margin-left: 30px;

    }
</style>