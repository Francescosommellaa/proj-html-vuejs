<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <div class="row ms-bg hover-footer-area">
    <div class="col-3">
      <img src="../../public/logo-sidearea-1.png" alt="logo footer" class="hover-footer-text-area" />
      <h6>Let's Get Creative</h6>
    </div>
    <div class="col-3">
      <ul class="d-flex flex-column">
        <li class="ms-listlink ms-underline fc3 hover-footer-text-area">maree@qodeinteractive.com</li>
        <li class="ms-listlink ms-underline fc3 hover-footer-text-area">+44645 321 789</li>
      </ul>
    </div>
    <div class="col-3">
      <ul class="d-flex flex-column">
        <li class="ms-listlink ms-underline fc3 hover-footer-text-area">Avenue d'Audeghem 10</li>
        <li class="ms-listlink ms-underline fc3 hover-footer-text-area">1040 Brusless, Belgium</li>
      </ul>
    </div>
    <div class="col-3 ms-icon-container">
      <span>Stay in tuch with us</span>
      <div class="d-flex justify-content-between ms-icon">
        <a href="#"><i class="fa-brands fa-twitter hover-footer-icon-area"></i></a>
        <a href="#"><i class="fa-brands fa-pinterest-p hover-footer-icon-area"></i></a>
        <a href="#"><i class="fa-brands fa-facebook-f hover-footer-icon-area"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin-in hover-footer-icon-area"></i></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.ms-bg {
  background-color: $backgroud-color8;
  padding: 6em 2em;
  font-size: 18px;

  .ms-icon-container {
    width: 190px;

    .ms-icon {
      margin-top: 0.5em;
    }

    a {
      color: black;
    }
  }
}
</style>
