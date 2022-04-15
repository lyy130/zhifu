<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<style lang="less">
   @import  "./assets/font/font.css";
html,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
li,
img {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;
}

html,
body,
#app
{
  height: 100%;
}
</style>
