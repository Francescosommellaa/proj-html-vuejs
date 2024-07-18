<script>
import { store } from "../store";
export default {
    name: "AppCarosel",
    data() {
        return {
            store,
            texts: 'document.querySelectorAll(".slidetext")',
        };
    },
    methods: {
        reloadAnimations() {
            /* refresh text anim*/
            document.getAnimations().forEach((anim) => {
                anim.play();
            });
            /* refresh gift */
            const gift = document.querySelectorAll(".magic");
            gift.forEach((magicGif) => {
                magicGif.src = magicGif.getAttribute("src");
            });
        },
    },
};
</script>
<template>
    <div id="Carosel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators m-auto">
            <button type="button" data-bs-target="#Carosel" data-bs-slide-to="0" class="active bg bg-black"
            aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#Carosel" data-bs-slide-to="1" aria-label="Slide 2"
            class="btn bg-black"></button>
            <button type="button" data-bs-target="#Carosel" data-bs-slide-to="2" aria-label="Slide 3"
            class="btn bg-black"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <div class="row">
                        <div class="col-5 mx-auto text-start p-5">
                            <h1 class="display-3 slidetext title-start">Pojects made</h1>
                            <h1 class="display-3 slidetext title-end">
                                whith <strong class="fw-bolder">Love</strong>
                            </h1>
                            <p class="slidetext subtitle-start">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                                accusamus alias
                            </p>
                            <p class="slidetext subtitle-end">
                                esse et fugit minus libero in error? Maxime libero odio
                            </p>
                            <button type="button" class="slidetext slider-btn ms_btn">
                                Read More
                            </button>
                        </div>
                        <div class="col-5">
                            <img class="magic" src="/public/magic01.gif" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                    <div class="row">
                        <div class="col-5 mx-auto text-start p-5">
                            <h1 class="display-3 slidetext title-start">Our new folio</h1>
                            <h1 class="display-3 slidetext title-end">
                                full of <strong class="fw-bolder">Joy</strong>
                            </h1>
                            <p class="slidetext subtitle-start">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                                accusamus alias
                            </p>
                            <p class="slidetext subtitle-end">
                                esse et fugit minus libero in error? Maxime libero odio
                            </p>
                            <button type="button" class="slidetext slider-btn ms_btn">
                                Read More
                            </button>
                        </div>
                        <div class="col-5">
                            <img class="magic" src="/public/magic02.gif" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                    <div class="row">
                        <div class="col-5 mx-auto text-start p-5">
                            <h1 class="display-3 slidetext title-start">Evotion get</h1>
                            <h1 class="display-3 slidetext title-end">
                                never <strong class="fw-bolder">Ends</strong>
                            </h1>
                            <p class="slidetext subtitle-start">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                                accusamus alias
                            </p>
                            <p class="slidetext subtitle-end">
                                esse et fugit minus libero in error? Maxime libero odio
                            </p>
                            <button type="button" class="ms_btn slidetext slider-btn">
                                Read More
                            </button>
                        </div>
                        <div class="col-5 ms-0">
                            <img class="magic" src="/public/magic03.gif" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <button @click="reloadAnimations" class="carousel-control-prev" type="button" data-bs-target="#Carosel"
                data-bs-slide="prev">
                <div class="ms-prev-icon">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </div>
                <span class="visually-hidden">Previous</span>
            </button>
            <button @click="reloadAnimations" class="carousel-control-next" type="button" data-bs-target="#Carosel"
                data-bs-slide="next">
                <div class="ms-prev-icon">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </div>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

#Carosel {
    height: 100%;
}

.carousel-indicators {
    width: 50px !important;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    height: 18px;
    color: white;
}

.carousel-control-prev {
    transform: translateX(-70px);
}

.carousel-control-next {
    transform: translateX(70px);
}

.slidetext {
    animation-name: showText;
    animation-duration: 2s;
}

.title-end {
    animation-delay: 0.4s;
}

.subtitle-start {
    animation-delay: 0.8s;
}

.subtitle-end {
    animation-delay: 1s;
}

.slider-btn {
    animation-delay: 1.2s;
}

.ms-prev-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background-color: $backgroud-color10;
}

@keyframes showText {
    from {
        opacity: 0%;
        transform: translateX(100px);
    }

    to {
        opacity: 100%;
        transform: translateX(0);
    }
}
</style>
