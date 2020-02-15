<template>
  <div class="page-header d-flex align-items-center justify-content-between">
    <h2>{{title}}</h2>
    <router-link to="#">
      <span>
        Home
        <i class="fa fa-angle-right"></i>
      </span>
      {{link}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeadingPage",
  props: ["title", "link"]
};
</script>

<style lang="scss" scoped>
.page-header {
  margin: 120px 50px 50px 300px;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 1px 1px 5px gray;
  border: 1px solid gray;
  border-radius: 10px;
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  a {
    color: blueviolet;
    &:hover {
      text-decoration: none;
    }
    span {
      color: gray;
    }
  }
}
</style>