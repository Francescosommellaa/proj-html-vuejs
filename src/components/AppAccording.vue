<script>
export default {
    name: "AppAccording",
    data() {
        return {
            accordingdata: [{
                title: "Animated",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maxime omnis minima. Sapiente fugiatpariatur saepe quaerat nostrum aperiam ratione, beatae perspiciatis, doloribus odio ipsam delectus voluptate et error distinctio!",
                value: false,
            },
            {
                title: "Riggering",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maxime omnis minima. Sapiente fugiatpariatur saepe quaerat nostrum aperiam ratione, beatae perspiciatis, doloribus odio ipsam delectus voluptate et error distinctio!",
                value: false,
            }
                ,
            {
                title: "Special Effect",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maxime omnis minima. Sapiente fugiatpariatur saepe quaerat nostrum aperiam ratione, beatae perspiciatis, doloribus odio ipsam delectus voluptate et error distinctio!",
                value: false,
            },
            {
                title: "3D modeling",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maxime omnis minima. Sapiente fugiatpariatur saepe quaerat nostrum aperiam ratione, beatae perspiciatis, doloribus odio ipsam delectus voluptate et error distinctio!",
                value: false,
            }]

        }
    }
};
</script>

<template>
    <div class="row">
        <div v-for="according in accordingdata" class="col-12">
            <div @click="(according.value == false ? according.value = true : according.value = false)"
                class="d-flex justify-content-between">
                <h6>{{ according.title }}</h6>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div v-show="(according.value != false)">
                <p>{{ according.text }}</p>
            </div>
        </div>
    </div>
    <!-- <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Animation
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Riggering
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Special Effects
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          3D Modeling
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped></style>
