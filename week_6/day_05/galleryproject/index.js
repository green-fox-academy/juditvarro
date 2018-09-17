'use strict'

const express = require('express');
const app = express();
const PORT = 3030;

const pictureList = [
  '/assets/Arctic_Fox.jpg',
  '/assets/redfox.jpg',
  '/assets/capefox.jpg',
]

const foxSpecies = [
  'Arctic fox',
  'Red fox',
  'Cape fox',
]

const foxDescription = [
  'The Arctic fox (Vulpes lagopus), also known as the white fox, polar fox, or snow fox, is a small fox native to the Arctic regions of the Northern Hemisphere and common throughout the Arctic tundra biome.',
  'The red fox (Vulpes vulpes) is the largest of the true foxes and one of the most widely distributed members of the order Carnivora, being present across the entire Northern Hemisphere from the Arctic Circle to North Africa North America and Eurasia. It is listed as least concern by the IUCN.',
  'The Cape fox (Vulpes chama), also called the asse, cama fox or the silver-backed fox, is a small fox, native to southern Africa. It has black or silver gray fur with flanks and underside in light yellow. The tip of its tail is always black.',
] 

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('home', {
    picture: pictureList[2],
    fox: foxSpecies[2],
    description: foxDescription[2],
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
