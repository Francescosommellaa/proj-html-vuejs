<script>
export default {
    name: "AppCardOffer",
};
</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="row row-card pt-5">
                <div class="col-4">
                    <a href="#">
                        <div class="card border border-0 position-relative">
                            <div class="ms-container-img">
                                <img class="card-img-top rounded-0" src="/public/h-2-blog-img-3.jpg"
                                    alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ">
                                    Introduce Richard Laperrière of those amazing features
                                </h5>
                                <italic class="card-text ms-underline fc1">by Emily Fields/Illustration</italic>
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
                            <div class="ms-container-img">
                                <img class="card-img-top rounded-0" src="/public/h-2-blog-img-2.jpg"
                                    alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">
                                    I try to give puople a different way of looking art
                                </h5>
                                <italic class="card-text ms-underline fc1">by Emily Fields/Illustration</italic>
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
                            <div class="ms-container-img">
                                <img class="card-img-top rounded-0" src="/public/h-2-blog-img-1.jpg"
                                    alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ">
                                    This way,loves:a detailed guide through new design
                                </h5>
                                <italic class="card-text ms-underline fc1">by Emily Fields/ Art, Illustration</italic>
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
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.row-card {
    display: flex;
    align-items: stretch;

    .ms-container-img {
        overflow: hidden;

        img.card-img-top {
            transition: transform 0.2s;
            width: 100%;
            height: auto;

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    .box {
        position: absolute;
        height: 60px;
        top: -4%;
        left: 7%;
        z-index: 1;

        .text-center {
            background-color: $backgroud-color8;
            font-size: 24px;
            padding: 0 0 0.2em 0;
            font-weight: 800;
        }

        .flag {
            background-color: $backgroud-color9;
            margin-bottom: 0;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
            font-size: 12px;
            padding: 0.4em 0.6em 1em;
            font-weight: 500;
        }
    }
}

:root {
    --underline-fc1-bg: #badac9;
    --underline-fc2-bg: #eb6950;
    --underline-fc3-bg: #f0817b;
}

.fc1 {
    --underline-bg: var(--underline-fc1-bg);
}

.fc2 {
    --underline-bg: var(--underline-fc2-bg);
}

.fc3 {
    --underline-bg: var(--underline-fc3-bg);
}

.ms-underline {
    display: inline;
    position: relative;
    overflow: hidden;
}

.ms-underline:after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 5px;
    height: 8px;
    transition-property: left, right;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    background-color: var(--underline-bg);
}

.ms-underline:hover:after,
.ms-underline:focus:after,
.ms-underline:active:after {
    right: 0;
}
</style>
