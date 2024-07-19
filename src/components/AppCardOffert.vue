<script>
import { store } from '../store';

export default {
    name: "AppCardOffert",
    data() {
        return {
            store,
            cardofferts: [{
                ancor: '#',
                pic: "/public/h-2-blog-img-3.jpg",
                text: "Introduce Richard Laperrière of those amazing features",
                by: " by Emily Fields/ Illustration",
                day: "07",
                data: "May'19"
            },
            {
                ancor: '#',
                pic: "/public/h-2-blog-img-2.jpg",
                text: "I try to give puople a different way of looking art",
                by: " by Emily Fields/ Illustration",
                day: "07",
                data: "May'19"
            },
            {
                ancor: '#',
                pic: "/public/h-2-blog-img-1.jpg",
                text: " This way,loves:a detailed guide through new design",
                by: "by Emily Fields/ Art, Illustration",
                day: "07",
                data: "May'19"
            }]
        }
    }
};
</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="row d-flex align-items-stretch pt-5 row-card"
                :class="(store.cardOffertdirection == false ? 'flex-row-reverse' : '')">
                <div v-for="card in cardofferts" class="col-4">
                    <a :href="card.ancor">
                        <div class="card border border-0 position-relative">
                            <div class="ms-container-img">
                                <img class="card-img-top rounded-0" :src="card.pic" alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ">
                                    {{ card.text }}
                                </h5>
                                <italic class="card-text ms-underline fc1">{{ card.by }}</italic>
                            </div>
                            <div class="box">
                                <div class="text-center box-style">{{ card.day }}</div>
                                <div class="flag">{{ card.data }}</div>
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

        .box-style {
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
</style>
