<template>
  <div class="event-single">
          <h1 class="title">{{ event.name }}</h1>
          <h2>
            <strong>Date:</strong>
            {{ event.date }}
            <br />
            <strong>Time:</strong>
            {{ event.time }}
          </h2>
          <p> <img src="@/assets/images/squirrels.jpg"> <img src="@/assets/images/squirrel.jpg" alt=""> <img src="@/assets/images/squirreltree.jpg"> </p>
  
        <p>{{ event.description }}</p>
        <p>
          <strong>Location:</strong>
          {{ event.location }}
        </p>
        <p>
          <strong>Category:</strong>
          {{ event.category }}
        </p>
  </div>
</template>
<script>
export default {
  name: "EventSingle",
  data() {
    return {
      events: [
        {
         id: 1,
        name: "Annual Gala",
        category: "Fundraising",
        description: "One night only! Meet our staff, learn our history and enjoy a nice meal with friends, while helping raise funds for this great organization.",
        location: "555 E. Broadway",
         date: '10-10-2021',
        time: '5:00pm'
        },
        {
          id: 2,
         name: "A Night Under The Stars",
         category: "Community Engagement",
         description: "Join us on this night-time adventure. Learn about the different species of squirrels all while playing games, enjoying local food trucks and use loaned telescopes to stargaze.",
         location: "Squirrel Valley Lodge",
         date: '12-15-2021',
         time: "7:00pm"
        }
      ],
      event: {}
    };
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
};
</script>