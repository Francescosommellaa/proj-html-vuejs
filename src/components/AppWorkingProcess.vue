<script>
import { store } from '../store'

export default {
    name: 'AppWorkingProcess',
    data() {
        return {
            store,
        }
    },
}

</script>

<template>

    <div class="row justify-content-center flex-nowrap">
        <div class="col-auto mx-auto pb-4">
            <h2>Working <span>process</span></h2>
        </div>
    </div>

    <div class="row justify-content-center flex-nowrap mb-5">
        <div class="col-7 ms_bg mx-auto">


            <div class="row">
                <div class="col-3">
                    <div class="text">
                        <i class="fa-regular fa-lightbulb"></i>
                        <h4>First Theres </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                <div class="col-3">
                    <div class="text">
                        <i class="fa-regular fa-comment"></i>
                        <h4>Then we talk about </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                <div class="col-3">
                    <i class="fa-solid fa-cloud"></i>
                    <div class="text">
                        <h4>And we think about </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                <div class="col-3">
                    <i class="fa-solid fa-pen"></i>
                    <div class="text">
                        <h4>So we draw along </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

h2 {
    font-size: 50px;

    span {
        font-weight: 800;
        font-family: 'italic';
    }
}

.ms_bg {
    background-image: url('../../public/svg/svg-3.svg');
    background-position: top;
    background-repeat: no-repeat;
}
</style>