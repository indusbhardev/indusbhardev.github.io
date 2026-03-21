const channels = [
  { 
    name: "STAR SPORTS 1 HINDI", 
    logo: "https://skynet.in.net/stareegr/2019/12/Untitled-design-30__1547961984_114.29.227.0-1.jpg", 
    url: "https://jiotvmblive.cdn.jio.com//bpk-tv/Star_Sports_1_Hindi_BTS/output/index.mpd?name=Star_Sports_1_Hindi&keyId=8ea9b607549252068e260a5f4d7dd321&key=350c0aaffedf51cc1502e9543c7c885e&cookie=__hdnea__=st=1774087228~exp=1774173628~acl=/*~hmac=f728dd31ae56b2f87c378944778efc90ead70df6e8fc1e63b97211ea9e85cfc6", 
    keyId: "", 
    key: "", 
    cookie: ""
  },
  {  
    name: "STAR ENGLISH", 
    logo: "https://wpleague.in/wp-content/uploads/2026/01/Star-Sports-Network-5.jpeg", 
    url: "https://example.com/stareng.mp4", 
    keyId: "jhgd5f6", 
    key: "jhggh786", 
    cookie: "jshjgh7.hu8h"
  }
];


const grid = document.getElementById('star-sports-grid');

channels.forEach(ch => {
  // Construct the long URL
  const destination = `https://indusbhar.blogspot.com/?url=${ch.url}&name=${encodeURIComponent(ch.name)}&keyid=${ch.keyId}&key=${ch.key}&cookie=${ch.cookie}`;

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
