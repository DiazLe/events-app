const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// mock data to send to our frontend
let events = 
[
  {
    id: 1,
    name: 'Annual Gala',
    category: 'Fundraising',
    description: 'One night only! Meet our staff, learn our history and enjoy a nice meal with friends, while helping raise funds for this great organization.',
    location: '555 E. Broadway',
    date: '10-10-2021',
    time: '5:00'
  },
  {
    id: 2,
    name: 'A Night Under The Stars',
    category: 'Community Engagement',
    description: 'Join us on this night-time adventure. Learn about the different species of squirrels all while playing games, enjoying local food trucks and use loaned telescopes to stargaze.',
    location: 'Squirrel Valley Lodge',
    date: '12-15-2021',
    time: '7:00'
  }
];

// NEW -- get all events
app.get('/events', (req, res) => {
    res.send(events);
  });

  // server/server.js
app.get('/events/:id', (req, res) => {
    const id = Number(req.params.id);
    const event = events.find(event => event.id === id);
    res.send(event);
  });

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

// listen on the port
app.listen(port);

