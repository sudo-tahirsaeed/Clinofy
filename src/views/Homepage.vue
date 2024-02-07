<template>
  <div class="home">
    THIS IS HOMEPAGE
    <div class="home">THIS IS HOMEPAGE</div>
    <div class="home">THIS IS HOMEPAGE</div>
    <div class="home">THIS IS HOMEPAGE</div>
  </div>

  <div class="home">THIS IS HOMEPAGE</div>
  <div class="home">THIS IS HOMEPAGE</div>
  <div class="home">THIS IS HOMEPAGE</div>
  <div class="home">THIS IS HOMEPAGE</div>
  <div class="home">THIS IS HOMEPAGE</div>
  <div class="home">THIS IS HOMEPAGE</div>
  <div class="home">THIS IS HOMEPAGE</div>
  <div class="home">THIS IS HOMEPAGE</div>
</template>
<script>
export default {
  name: "HomePage",
  msg: {
    require: true,
    String,
  },
};
</script>
<style>
.home {
  background-color: rgb(255, 255, 255);
  flex: 1;
  width: 100%;
  height: 100%;
  color: black;
  text-align: left;
}
</style>
