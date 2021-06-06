
<template>
<nav>
    <a class="navbar-item" href="/">
      <strong>Humans for Squirrels</strong>
    </a>
    <a role="button" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  <div id="navbar">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/gifting" class="navbar-item">Gifting</router-link>
    </div> 
  </div>
</nav>
</template>
<script>
export default {
    name: 'Nav'
}
</script>
<style lang="scss" scoped>

    a {
      font-weight: bold;
      color: #cdd6cc;
      &.router-link-exact-active {
        color: #8ca0a2;
      }
    }  
  
</style>