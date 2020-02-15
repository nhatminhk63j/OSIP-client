<template>
  <nav class="navbar topnav">
    <a class="navbar-brand" href="#">
      <img src="http://osip.ml/static/media/logo-color.3271c830.png" width="200" alt />
    </a>
  </nav>
</template>

<script>
export default {
  name: "TopNav"
};
</script>

<style scoped lang="scss">
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  &::after {
    z-index: -10;
    background-image: url("http://osip.ml/static/media/header-bg.c01de935.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &::before {
    z-index: -1;
    background-color: #673ab7 !important;
    opacity: 0.8;
  }
}
</style>