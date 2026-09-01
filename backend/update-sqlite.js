const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');
const structuredData = {
  'Smart Villa Garden': 'Situation: High-end luxury property lacking modern ecological features.\nIdea: A glowing, futuristic green tech garden.\nNABTURA Solutions: Automated hydroponics, mood-lit vertical farming, water reclamation.\nPotential Benefits: Luxury aesthetics, fresh home produce, increased property value.',
  'Forest Restaurant': 'Situation: Standard dining room lacking atmosphere.\nIdea: Dine surrounded by dense indoor tropical trees and glowing moss.\nNABTURA Solutions: Living walls, indoor climate control, botanical ambient lighting.\nPotential Benefits: Unique dining experience, natural air purification, premium branding.',
  'Green School': 'Situation: Disconnect between students and food sources.\nIdea: Educate the next generation with indoor vertical farming.\nNABTURA Solutions: Educational hydroponic systems, interactive grow panels.\nPotential Benefits: Hands-on learning, fresh cafeteria food, eco-awareness.',
  'Productive Rooftop': 'Situation: Underutilized, barren urban roof space.\nIdea: Advanced aeroponic growing towers overlooking the city.\nNABTURA Solutions: Wind-resistant aeroponics, smart irrigation, lightweight infrastructure.\nPotential Benefits: Localized food supply, urban cooling, profitable space utilization.',
  'Urban Oasis': 'Situation: Concrete-heavy, heat-trapping city environments.\nIdea: A lush, towering green oasis with cooling water features.\nNABTURA Solutions: Vertical forests, misting systems, bio-filtration.\nPotential Benefits: Reduced heat island effect, community well-being, striking architecture.',
  'Smart Greenhouse Investment': 'Situation: Need for scalable, high-yield agriculture investments.\nIdea: High-tech facilities with glowing crops and robotics.\nNABTURA Solutions: AI-driven climate control, robotic harvesting, precision agriculture.\nPotential Benefits: High ROI, year-round yields, minimal resource waste.',
  'Microgreen Restaurant': 'Situation: High costs and spoilage of premium ingredients.\nIdea: Chefs harvest microgreens directly from glowing dining walls.\nNABTURA Solutions: In-restaurant micro-farms, harvest-on-demand tech.\nPotential Benefits: Ultimate freshness, zero transport emissions, visual appeal.',
  'Water-Smart Resort': 'Situation: High water consumption in hospitality.\nIdea: Bioluminescent pools and advanced purification displays.\nNABTURA Solutions: Closed-loop water recycling, aesthetic bio-filters.\nPotential Benefits: Eco-tourism appeal, massive water savings, mesmerizing aesthetics.',
  'Edible Corporate Campus': 'Situation: Uninspiring office parks causing employee fatigue.\nIdea: Courtyards surrounded by fruit-bearing vertical gardens.\nNABTURA Solutions: Corporate farming, relaxing biophilic design, employee harvest programs.\nPotential Benefits: Improved mental health, talent retention, corporate sustainability.',
  'Desert-to-Green Transformation': 'Situation: Arid, unusable desert land.\nIdea: A thriving green ecosystem turning sand into life.\nNABTURA Solutions: Sub-surface smart irrigation, drought-resistant soil tech, solar desalination.\nPotential Benefits: Land reclamation, food security in extreme climates, eco-restoration.'
};

const stmt = db.prepare('UPDATE possibilities SET "desc" = ? WHERE name = ?');
let changes = 0;
for (const [name, desc] of Object.entries(structuredData)) {
  const result = stmt.run(desc, name);
  changes += result.changes;
}
console.log('Updated ' + changes + ' records.');
