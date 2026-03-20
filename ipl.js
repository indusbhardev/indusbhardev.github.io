const channels = [
  { 
    name: "STAR HINDI", 
    logo: "https://example.com/starhindi.png", 
    url: "https://example.com/starhindi.mp4", 
    keyId: "jhgd7676", 
    key: "jhgdfj8786", 
    cookie: "jshj8h.fhu8h"
  },
  {  
    name: "STAR ENGLISH", 
    logo: "https://example.com/stareng.png", 
    url: "https://example.com/stareng.mp4", 
    keyId: "jhgd5f6", 
    key: "jhggh786", 
    cookie: "jshjgh7.hu8h"
  }
];

const grid = document.getElementById('star-sports-grid');

channels.forEach(ch => {
  // Construct the long URL
  const destination = `https://indusbhar.blospot.com/?url=${ch.url}&name=${encodeURIComponent(ch.name)}&keyid=${ch.keyId}&key=${ch.key}&cookie=${ch.cookie}`;

  // Create the HTML structure
  const card = document.createElement('a');
  card.href = destination;
  card.className = 'channel-card';
  card.target = "_blank"; // Opens in new tab

  card.innerHTML = `
    <div class="logo-container">
      <img src="${ch.logo}" alt="${ch.name}">
    </div>
    <div class="channel-info">
      <span>${ch.name}</span>
    </div>
  `;

  grid.appendChild(card);
});
