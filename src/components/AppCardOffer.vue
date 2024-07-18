<script>
export default {
    name: 'AppCardOffer'
}
</script>

<template>
    <div class="row">
        <div class="col-12 ">
            <div class="row row-card pt-5">
                <div class="col-4">
                    <a href="#">
                        <div class="card border border-0 position-relative ">
                            <img class="card-img-top rounded-0" src="/public/h-2-blog-img-3.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Introduce Richard Laperrière of those amazing features</h5>
                                <italic class="card-text">by Emily Fields/Illustration</italic>
                            </div>
                            <div class="box">
                                <div class="text-center">07</div>
                                <div class="flag">May'19</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-4">
                    <a href="#">
                        <div class="card border border-0 position-relative">
                            <img class=" card-img-top rounded-0" src="/public/h-2-blog-img-2.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">I try to give puople a different way of looking art</h5>
                                <italic class="card-text">by Emily Fields/Illustration</italic>
                            </div>
                            <div class="box">
                                <div class="text-center">07</div>
                                <div class="flag">May'19</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-4">
                    <a href="#">
                        <div class="card border border-0 position-relative">
                            <img class=" card-img-top rounded-0" src="/public/h-2-blog-img-1.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title ">This way,loves:a detailed guide through new design</h5>
                                <italic class="card-text ms-underline-fc2">by Emily Fields/ Art, Illustration</italic>
                            </div>
                            <div class="box">
                                <div class="text-center">07</div>
                                <div class="flag">May'19</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </div>





</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

.row-card {
    display: flex;
    align-items: stretch;

    .box {
        position: absolute;
        height: 50px;
        background-color: $backgroud-color8;
        top: -4%;
        left: 7%;
        z-index: 1;

        .flag {
            background-color: $backgroud-color10;
            margin-bottom: 0;
        }
    }
}
</style>