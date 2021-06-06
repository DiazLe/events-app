<template>
  <div class="event-card">
      
        <h2 class="elink">{{ event.name }}</h2>
        <p class="elink">{{ event.date }}</p>
        <p class="elink">{{ event.location }}</p>
        <p class="elink">{{event.time}}</p>

  </div>
   
</template>

<script>
export default {
  props: [
    'event'
  ]
}
</script>
