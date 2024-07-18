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
        <div class="col-auto pb-4">
            <h2>Working <span>process</span></h2>
        </div>
    </div>

    <div class="row justify-content-center flex-nowrap mb-5">
        <div class="col-10 ms_bg ">

            <div class="overlay"></div>

            <div class="row text-center">
                <div class="col-3">
                    <div class="text">
                        <i class="fa-regular fa-lightbulb"></i>
                        <h5>First Theres </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                <div class="col-3">
                    <div class="text">
                        <i class="fa-regular fa-comment"></i>
                        <h5>Then we talk about</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                <div class="col-3">
                    <i class="fa-solid fa-cloud"></i>
                    <div class="text">
                        <h5>And we think about </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                <div class="col-3">
                    <i class="fa-solid fa-pen"></i>
                    <div class="text">
                        <h5>So we draw along </h5>
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
    font-size: 70px;
    margin: 2em 0 1em;

    span {
        font-weight: 800;
        font-family: 'italic';
    }
}

.col-10 {
    overflow-x: hidden;
}

.ms_bg {
    background-image: url('../../public/svg/svg-3.svg');
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 3em;
    position: relative;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background-color: white;
        z-index: 0;
        animation: slideRight 4s ease-in forwards;
    }

    h5 {
        margin-top: 1em;
        font-weight: 600;
    }

    i {
        height: 140px;
        width: 140px;
        border-radius: 50%;
        font-size: 40px;
        line-height: 140px;
        background-color: $backgroud-color6;
        opacity: 0;
        animation: fadeIn ease-in-out 1s forwards;
    }

    .fa-lightbulb {
        color: $text-colors4;
        animation-delay: 0.6s;
    }

    .fa-comment {
        color: $text-colors3;
        animation-delay: 1.2s;
    }

    .fa-cloud {
        color: $text-colors9;
        animation-delay: 1.8s;
    }

    .fa-pen {
        color: $text-colors6;
        animation-delay: 2.4s;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes slideRight {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(100%);
        }
    }
}
</style>