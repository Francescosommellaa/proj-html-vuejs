<script>
export default {
    name: "AppCaroselCit",
};
</script>

<template>
    <div class="row back">
        <div class="col-10 mx-auto vertical">
            <div id="caroselcit" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <div class="d-block w-100 text-center">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <h4>Lara Colins</h4>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <div class="d-block w-100 text-center">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <h4>Akiko Rector</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-block w-100 text-center">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <h4>Mark Beaver</h4>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#caroselcit" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon  hover-arrow-area" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#caroselcit" data-bs-slide="next">
                    <span class="carousel-control-next-icon  hover-arrow-area" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.back {
    background-color: $backgroud-color10;
    background-image: url(../../public/cit-bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 300px;

    .vertical {
        align-content: center;
    }
}
</style>
