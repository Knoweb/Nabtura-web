const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');
const data = {
  'Smart Villa Garden': {
    situation: 'High-end luxury property lacking modern ecological features.',
    idea: 'A glowing, futuristic green tech garden.',
    solutions: 'Automated hydroponics, mood-lit vertical farming, water reclamation.',
    benefits: 'Luxury aesthetics, fresh home produce, increased property value.'
  },
  'Forest Restaurant': {
    situation: 'Standard dining room lacking atmosphere.',
    idea: 'Dine surrounded by dense indoor tropical trees and glowing moss.',
    solutions: 'Living walls, indoor climate control, botanical ambient lighting.',
    benefits: 'Unique dining experience, natural air purification, premium branding.'
  },
  'Green School': {
    situation: 'Disconnect between students and food sources.',
    idea: 'Educate the next generation with indoor vertical farming.',
    solutions: 'Educational hydroponic systems, interactive grow panels.',
    benefits: 'Hands-on learning, fresh cafeteria food, eco-awareness.'
  },
  'Productive Rooftop': {
    situation: 'Underutilized, barren urban roof space.',
    idea: 'Advanced aeroponic growing towers overlooking the city.',
    solutions: 'Wind-resistant aeroponics, smart irrigation, lightweight infrastructure.',
    benefits: 'Localized food supply, urban cooling, profitable space utilization.'
  },
  'Urban Oasis': {
    situation: 'Concrete-heavy, heat-trapping city environments.',
    idea: 'A lush, towering green oasis with cooling water features.',
    solutions: 'Vertical forests, misting systems, bio-filtration.',
    benefits: 'Reduced heat island effect, community well-being, striking architecture.'
  },
  'Smart Greenhouse Investment': {
    situation: 'Need for scalable, high-yield agriculture investments.',
    idea: 'High-tech facilities with glowing crops and robotics.',
    solutions: 'AI-driven climate control, robotic harvesting, precision agriculture.',
    benefits: 'High ROI, year-round yields, minimal resource waste.'
  },
  'Microgreen Restaurant': {
    situation: 'High costs and spoilage of premium ingredients.',
    idea: 'Chefs harvest microgreens directly from glowing dining walls.',
    solutions: 'In-restaurant micro-farms, harvest-on-demand tech.',
    benefits: 'Ultimate freshness, zero transport emissions, visual appeal.'
  },
  'Water-Smart Resort': {
    situation: 'High water consumption in hospitality.',
    idea: 'Bioluminescent pools and advanced purification displays.',
    solutions: 'Closed-loop water recycling, aesthetic bio-filters.',
    benefits: 'Eco-tourism appeal, massive water savings, mesmerizing aesthetics.'
  },
  'Edible Corporate Campus': {
    situation: 'Uninspiring office parks causing employee fatigue.',
    idea: 'Courtyards surrounded by fruit-bearing vertical gardens.',
    solutions: 'Corporate farming, relaxing biophilic design, employee harvest programs.',
    benefits: 'Improved mental health, talent retention, corporate sustainability.'
  },
  'Desert-to-Green Transformation': {
    situation: 'Arid, unusable desert land.',
    idea: 'A thriving green ecosystem turning sand into life.',
    solutions: 'Sub-surface smart irrigation, drought-resistant soil tech, solar desalination.',
    benefits: 'Land reclamation, food security in extreme climates, eco-restoration.'
  }
};

try {
  const stmt = db.prepare('UPDATE possibilities SET situation = ?, idea = ?, solutions = ?, benefits = ? WHERE name = ?');
  let changes = 0;
  for (const [name, fields] of Object.entries(data)) {
    const result = stmt.run(fields.situation, fields.idea, fields.solutions, fields.benefits, name);
    changes += result.changes;
  }
  console.log('Updated ' + changes + ' records with separated fields.');
} catch (e) {
  console.error("Failed to update database. Did the schema migrate yet?", e.message);
}
