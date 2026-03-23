const channels = [
  { 
    name: "STAR SPORTS 1 HINDI 480P", 
    logo: "https://skynet.in.net/stareegr/2019/12/Untitled-design-30__1547961984_114.29.227.0-1.jpg", 
    url: "https://shorturl.at/ZRf84" 
    
  },
  {  
    name: "STAR SPORTS 1 HINDI HD 720P, 1080P", 
    logo: "https://cdn.jsdelivr.net/gh/kratos877/picx-images-hosting@master/20231211/image-Content-60-j5fdr6a0-m1.4pi4jxp1lme0.webp", 
    url: "https://shorturl.at/hq02u"
  },
  { 
    name: "STAR SPORTS 1 480P", 
    logo: "https://logodix.com/logo/947778.png", 
    url: "https://shorturl.at/L6wei"
  },
  {
    name: "STAR SPORTS 1 HD 720P, 1080P", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Star_Sports_1_HD.png", 
    url: "https://shorturl.at/Bw8UG"
  }
];



const grid = document.getElementById('star-sports-grid');
const themeToggle = document.getElementById('themeToggle');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');

channels.forEach(ch => {
  // 1. Create a div instead of an anchor tag
  const card = document.createElement('div');
  card.className = 'channel-card flex-none w-64 bg-brand-lightCard dark:bg-brand-darkCard rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100 dark:border-gray-800';
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

      


themeToggle.addEventListener('click', toggleTheme);
