const channels = [
  { 
    name: "STAR SPORTS 1 HINDI 480P", 
    logo: "https://skynet.in.net/stareegr/2019/12/Untitled-design-30__1547961984_114.29.227.0-1.jpg", 
    url: "https://dash.vodep39240327.workers.dev/?url=https://jiotvmblive.cdn.jio.com//bpk-tv/Star_Sports_1_Hindi_BTS/output/index.mpd?name=Star_Sports_1_Hindi&keyId=8ea9b607549252068e260a5f4d7dd321&key=350c0aaffedf51cc1502e9543c7c885e&cookie=__hdnea__=st=1774087228~exp=1774173628~acl=/*~hmac=f728dd31ae56b2f87c378944778efc90ead70df6e8fc1e63b97211ea9e85cfc6" 
    
  },
  {  
    name: "STAR SPORTS 1 HINDI HD 720P, 1080P", 
    logo: "https://cdn.jsdelivr.net/gh/kratos877/picx-images-hosting@master/20231211/image-Content-60-j5fdr6a0-m1.4pi4jxp1lme0.webp", 
    url: "https://dash.vodep39240327.workers.dev/?url=https://jiotvmblive.cdn.jio.com//bpk-tv/Star_Sports_HD1_Hindi_BTS/output/index.mpd?name=Star_Sports_HD1_Hindi&keyId=400131994b445d8c8817202248760fda&key=2d56cb6f07a75b9aff165d534ae2bfc4&cookie=__hdnea__=st=1774108842~exp=1774195242~acl=/*~hmac=7d89a833c6261bebfe33598dc7c636cd4a316f855fac910c88eeb6ef56d36204"
  }
];


const grid = document.getElementById('star-sports-grid');

channels.forEach(ch => {
  // Construct the long URL
  const destination = `${ch.url}`;

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
