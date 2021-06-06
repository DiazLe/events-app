<template>
  <div class="events container">
    <h2>
    Upcoming events!
    </h2>
    <div>
      <div v-for="event in events" :event="event" :key="event.id">
        <router-link :to="'/event/' + event.id">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import EventCard from '@/components/EventCard';
export default {
  name: 'EventsList',
  components : {
    EventCard
  },
  data () {
    return {
      event: {},
      events: [
        {
          id: 1,
          name: 'Annual Gala',
          category: 'Fundraising',
          description: 'One night only! Meet our staff, learn our history and enjoy a nice meal with friends, while helping raise funds for this great organization.',
          location: '555 E. Broadway',
          date: '10-10-2021',
          time: '5:00pm'
        },
        {
          id: 2,
          name: 'A Night Under The Stars',
          category: 'Community Engagement',
          description: 'Join us on this night-time adventure. Learn about the different species of squirrels all while playing games, enjoying local food trucks and use loaned telescopes to stargaze.',
          location: 'Squirrel Valley Lodge',
          date: '12-15-2021',
          time: '7:00pm'
        }
      ]
    }    
  }
}
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>