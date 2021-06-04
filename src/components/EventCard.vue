<template>
  <div class="event-card">
    
        <h2>{{ event.name }}</h2>
        <p>{{ event.date }}</p>
        <p>{{ event.location }}</p>
        <p>{{event.time}}</p>

  </div>
   
</template>

<script>
export default {
  props: [
    'event'
  ]
}
</script>
