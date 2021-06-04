<template>
  <div class="event-single">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <h2 class="subtitle ">
            <strong>Date:</strong> {{ event.date }}
            <br>
            <strong>Time:</strong> {{ event.time }}
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="description">{{ event.description }}</p>
        <p><strong>Location:</strong> {{ event.location }}</p>
        <p><strong>Category:</strong> {{ event.category }}</p>
        <div class="event-images">
          <div v-for="image in event.images" :key="image.id">
            <img :src="image" :alt="event.name"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'EventSingle',
  data () {
    return {
      events: [
        {
          id: 1,
          name: 'Annual Gala',
          category: 'Fundraising',
          description: 'One night only! Meet our staff, learn our history and enjoy a nice meal with friends, while helping raise funds for this great organization.',
          featuredImage: <img src="logo.png"/>,
          images: [
            
          ],
          location: '555 E. Broadway',
          date: '10-10-2021',
          time:'5:00'
        },
        {
          id: 2,
           name: 'A Night Under The Stars',
          category: 'Community Engagement',
          description: 'Join us on this night-time adventure. Learn about the different species of squirrels all while playing games, enjoying local food trucks and use loaned telescopes to stargaze.',
          featuredImage: <img src="logo.png"/>, 
          images: [
            
          ],
          location: 'Squirrel Valley Lodge',
          date: '12-15-2021',
          time: '7:00'
        }
      ],
      event: {}
    }    
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
}
</script>