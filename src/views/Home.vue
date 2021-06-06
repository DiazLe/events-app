<template>
<div class="home">
        <h1 class="title">
          <img :src="require('@/assets/logo.png')" id="logo">
        </h1>
  
        <h2 class="subtitle">
          Thank you for visitng Humans for Squirrels!  
        </h2>
        <p>Make sure to check out our upcoming events!</p>
  
               <EventsList />

      

</div>
  
</template>
<script>
import EventsList from '../components/EventsList';
export default {
  name: 'home', 
  components: {
    EventsList
  } 
}
</script>
