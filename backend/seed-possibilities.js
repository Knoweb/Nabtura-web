const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const STRAPI_URL = 'http://localhost:1337';
// If authentication is required, add a token. Assuming it's open for creation in dev or we use public role.

const possibilities = [
  {
    name: "Smart Villa Garden",
    desc: "Transform your luxury villa with glowing futuristic green tech integrated into sleek modern landscaping.",
    filename: "possibility_villa_garden_1788259031083.jpg"
  },
  {
    name: "Forest Restaurant",
    desc: "Dine surrounded by dense indoor tropical trees and glowing green moss walls with ambient lighting.",
    filename: "possibility_forest_restaurant_1788259046486.jpg"
  },
  {
    name: "Green School",
    desc: "Educate the next generation with indoor vertical farming walls and educational hydroponic systems.",
    filename: "possibility_green_school_1788259063374.jpg"
  },
  {
    name: "Productive Rooftop",
    desc: "Utilize unused space with advanced aeroponic growing towers overlooking the city skyline.",
    filename: "possibility_productive_rooftop_1788259076379.jpg"
  },
  {
    name: "Urban Oasis",
    desc: "A lush, towering green oasis with cooling water features integrated into modern concrete architecture.",
    filename: "possibility_urban_oasis_1788259090378.jpg"
  },
  {
    name: "Smart Greenhouse Investment",
    desc: "High-tech investment facilities with rows of glowing hydroponic crops and futuristic robotic arms.",
    filename: "possibility_smart_greenhouse_1788259107781.jpg"
  },
  {
    name: "Microgreen Restaurant",
    desc: "Chefs harvest fresh microgreens directly from glowing vertical indoor farms built into the dining walls.",
    filename: "possibility_microgreen_restaurant_1788259126207.jpg"
  },
  {
    name: "Water-Smart Resort",
    desc: "Stunning bioluminescent pools and advanced water purification displays integrated into resort pathways.",
    filename: "possibility_water_resort_1788259143543.jpg"
  },
  {
    name: "Edible Corporate Campus",
    desc: "Tech workers relax in courtyards surrounded by advanced fruit-bearing vertical gardens.",
    filename: "possibility_corporate_campus_1788259157723.jpg"
  },
  {
    name: "Desert-to-Green Transformation",
    desc: "A thriving green ecosystem powered by futuristic irrigation nodes, turning barren desert sand into life.",
    filename: "possibility_desert_transformation_1788259170943.jpg"
  }
];

const imageDir = path.join(__dirname, '../frontend/public/images/possibilities');

async function seed() {
  for (const pos of possibilities) {
    try {
      console.log(`Uploading ${pos.filename}...`);
      const form = new FormData();
      form.append('files', fs.createReadStream(path.join(imageDir, pos.filename)));
      
      const uploadRes = await axios.post(`${STRAPI_URL}/api/upload`, form, {
        headers: {
          ...form.getHeaders()
        }
      });
      
      const imageId = uploadRes.data[0].id;
      
      console.log(`Creating entry for ${pos.name}...`);
      await axios.post(`${STRAPI_URL}/api/possibilities`, {
        data: {
          name: pos.name,
          desc: pos.desc,
          image: imageId
        }
      });
      
      console.log(`Successfully created ${pos.name}.`);
    } catch (err) {
      console.error(`Error processing ${pos.name}:`, err.response?.data || err.message);
    }
  }
  console.log("Done.");
}

seed();
