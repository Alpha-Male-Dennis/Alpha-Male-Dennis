const fs = require('fs');
const https = require('https');

// Simple SVG template
const svgTemplate = (username, date) => `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="120" viewBox="0 0 800 120">
  <style>
    .background { fill: #0d1117; }
    .title { fill: #ffffff; font-family: Arial, sans-serif; font-size: 24px; }
    .subtitle { fill: #cccccc; font-family: Arial, sans-serif; font-size: 16px; }
    .snake-path { fill: none; stroke: #00ff00; stroke-width: 3; }
    .grid-line { fill: none; stroke: #30363d; stroke-width: 1; }
  </style>
  
  <rect class="background" width="800" height="120"/>
  
  <!-- Title -->
  <text class="title" x="400" y="40" text-anchor="middle">GitHub Contributions Snake</text>
  <text class="subtitle" x="400" y="70" text-anchor="middle">For ${username} • Generated on ${date}</text>
  
  <!-- Simple snake-like path -->
  <path class="snake-path" d="M 50,90 Q 150,50 250,90 Q 350,130 450,90 Q 550,50 650,90 Q 750,130 750,90" />
  
  <!-- Grid lines -->
  <path class="grid-line" d="M 0,90 L 800,90" />
  <path class="grid-line" d="M 0,30 L 800,30" />
  <path class="grid-line" d="M 0,60 L 800,60" />
</svg>
`;

const username = 'Alpha-Male-Dennis';
const date = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
});

const svg = svgTemplate(username, date);
fs.writeFileSync('snake.svg', svg);
console.log('Generated snake.svg');
