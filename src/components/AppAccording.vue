<script>
export default {
    name: "AppAccording",
    data() {
        return {
            accordingdata: [
                {
                    title: "Animated",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maxime omnis minima. Sapiente fugiatpariatur saepe quaerat nostrum aperiam ratione, beatae perspiciatis, doloribus odio ipsam delectus voluptate et error distinctio!",
                    value: false,
                },
                {
                    title: "Riggering",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maxime omnis minima. Sapiente fugiatpariatur saepe quaerat nostrum aperiam ratione, beatae perspiciatis, doloribus odio ipsam delectus voluptate et error distinctio!",
                    value: false,
                },
                {
                    title: "Special Effect",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maxime omnis minima. Sapiente fugiatpariatur saepe quaerat nostrum aperiam ratione, beatae perspiciatis, doloribus odio ipsam delectus voluptate et error distinctio!",
                    value: false,
                },
                {
                    title: "3D modeling",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maxime omnis minima. Sapiente fugiatpariatur saepe quaerat nostrum aperiam ratione, beatae perspiciatis, doloribus odio ipsam delectus voluptate et error distinctio!",
                    value: false,
                },
            ],
        };
    },
};
</script>

<template>
    <div class="row">
        <div v-for="according in accordingdata" class="col-12 pb-3">
            <div @click="
                according.value == false
                    ? (according.value = true)
                    : (according.value = false)
                " class="d-flex justify-content-between">
                <h6>{{ according.title }}</h6>
                <i class="fa-solid fa-plus" :class="according.value == true ? 'rotation' : ''"></i>
            </div>
            <Transition name="bounce">
                <div v-show="according.value != false">
                    <p>{{ according.text }}</p>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.justify-content-between {
    border-bottom: 3px solid $backgroud-color9;
}

.rotation {
    animation: roll 0.5s linear forwards;

    @keyframes roll {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(27deg);
        }

        100% {
            transform: rotate(45deg);
        }
    }

}




.bounce-enter-active {
    animation: bounce-in 1s;
}

.bounce-leave-active {
    animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
    0% {

        opacity: 0;
    }

    25% {
        opacity: 0.25;
    }

    75% {
        opacity: 0.75;
    }

    100% {

        opacity: 1;
    }
}
</style>
