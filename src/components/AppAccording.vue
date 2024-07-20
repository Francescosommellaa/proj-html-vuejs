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
                <i class="fa-solid fa-plus" :style="according.value == true ? 'transform : rotate(45deg)' : ''"></i>
            </div>
            <div v-show="according.value != false">
                <p>{{ according.text }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.justify-content-between {
    border-bottom: 3px solid $backgroud-color9;
}
</style>
