const channels = [
  { 
    name: "STAR SPORTS 1 HINDI 480P", 
    logo: "https://skynet.in.net/stareegr/2019/12/Untitled-design-30__1547961984_114.29.227.0-1.jpg", 
    url: "https://shorturl.at/ZRf84" 
    
  },
  {  
    name: "STAR SPORTS 1 HINDI HD 720P, 1080P", 
    logo: "https://cdn.jsdelivr.net/gh/kratos877/picx-images-hosting@master/20231211/image-Content-60-j5fdr6a0-m1.4pi4jxp1lme0.webp", 
    url: "https://dash.vodep39240327.workers.dev/?url=https://jiotvmblive.cdn.jio.com//bpk-tv/Star_Sports_HD1_Hindi_BTS/output/index.mpd?name=Star_Sports_HD1_Hindi&keyId=400131994b445d8c8817202248760fda&key=2d56cb6f07a75b9aff165d534ae2bfc4&cookie=__hdnea__=st=1774108842~exp=1774195242~acl=/*~hmac=7d89a833c6261bebfe33598dc7c636cd4a316f855fac910c88eeb6ef56d36204"
  }
];



const grid = document.getElementById('star-sports-grid');
const themeToggle = document.getElementById('themeToggle');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');

channels.forEach(ch => {
  // 1. Create a div instead of an anchor tag
  const card = document.createElement('div');
  card.className = 'channel-card';
  // Optional: Add a pointer cursor so users know it's clickable
  card.style.cursor = 'pointer';

  card.innerHTML = `
    <div class="logo-container">
      <img src="${ch.logo}" alt="${ch.name}">
    </div>
    <div class="channel-info">
      <span>${ch.name}</span>
    </div>
  `;

  // 2. Add the Click Event Listener
  card.addEventListener('click', () => {
    // Use window.location.href to redirect in the same tab
    window.location.href = ch.url;
    
    // NOTE: If you still want a new tab, use:
    // window.open(ch.url, '_blank');
  });

  grid.appendChild(card);
});




        // 4. Dark/Light Mode Toggler
        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        }

        // --- Initialization ---

        // Set initial theme based on localStorage or system preference
        if (localStorage.getItem('theme') === 'light' || (!('theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.remove('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.add('dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
