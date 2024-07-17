<script>
import { store } from '../store'
export default {
    name: 'AppCarosel',
    data() {
        return {
            store,
        }
    },
};

</script>
<template>
    <div id="Carosel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators m-auto  ">
            <button type="button" data-bs-target="#Carosel" data-bs-slide-to="0" class="active bg bg-dark "
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#Carosel" data-bs-slide-to="1" aria-label="Slide 2"
                class="btn bg bg-dark "></button>
            <button type="button" data-bs-target="#Carosel" data-bs-slide-to="2" aria-label="Slide 3"
                class="btn bg bg-dark  "></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <div class="row ">
                        <div class="col-10 mx-auto text-start p-5">
                            <h2>Pojects made <br> whith <strong>Love</strong></h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus alias esse et
                                fugit minus libero in error? Maxime libero odio provident rerum nam ipsum natus illo
                                reiciendis rem minus!</p>
                            <button type="button" class="btn btn-outline-primary"><a href="#">Read More</a></button>
                            <img src="/public/short-slider-rev-1-img-3.png" alt="...">
                            <img src="/public/short-slider-rev-1-img-1.png" alt="...">
                        </div>
                    </div>

                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <div class="row">
                        <div class="col-10 mx-auto">
                            <h2>Our new folio <br> full of <strong>joy</strong></h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ut illum similique,
                                dolor quasi quas dolores consequuntur unde aperiam totam esse porro facilis nihil.
                                Illum, totam! Unde corporis officia maxime.</p>
                            <button type="button" class="btn btn-outline-primary"><a href="#">Read More</a></button>

                            <img src="/public/h-2-slider-img-11.png" class="img-fluid" alt="...">

                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row ">
                        <div class="col-10 mx-auto">
                            <h2>Devotion get <br>never <strong>ends</strong></h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid corrupti quibusdam,
                                similique tempore eius officiis consequuntur suscipit nulla, tempora distinctio qui.
                                Dolore, quae mollitia culpa adipisci rem quam id blanditiis?</p>
                            <button type="button" class="btn btn-outline-primary"> <a href="#">Read More</a> </button>

                            <div class="col-5 me-auto"><img src="/public/h-2-slider-img-15.png" class="img-fluid"
                                    alt="...">
                                <img src="/public/h-2-slider-img-16.png" class="img-fluid" alt="...">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#Carosel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next " type="button" data-bs-target="#Carosel" data-bs-slide="next">
                <span class="carousel-control-next-icon " aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

#Carosel .col-10 {
    height: 70vh;

    p,
    h2 {
        width: 50%;
    }

    img {
        float: right;
        width: 50%;
    }
}

.carousel-indicators {
    width: 50px !important;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    filter: invert(100%);
}
</style>