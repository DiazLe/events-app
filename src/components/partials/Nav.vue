<template>
<nav>
  <div class="brand">
    <a class="navbar-item" href="/">
      <strong>Humans for Squirrels</strong>
    </a>
    <a role="button" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbar">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a>
            <strong>Sign In</strong>
          </a>
        </div>
      </div>
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
      color: #2c3e50;
      &.router-link-exact-active {
        color: #8ca0a2;
      }
    }  
  
</style>