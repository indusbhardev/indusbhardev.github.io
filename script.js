// 1. Data Object (Updated with unique logoUrl)
const channels = [
    { 
        id: "star_hindi", 
        url: "https://example1.mp4", 
        name: "star hindi", 
        keyId: "6485gjh44345", 
        key: "843658hjjj", 
        cookie: "kjsyfisduf87ydsfgdusf.dsfhsf", 
        category: "sports",
        display: "HINDI",
        // Unique logo for Star Sports Hindi (or a generic Star logo)
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Star_Sports_logo.svg/2560px-Star_Sports_logo.svg.png" 
    },
    { 
        id: "star_hindi_1", 
        url: "https://example2.mp4", 
        name: "star hindi 1", 
        keyId: "sgdfgojiogu9879", 
        key: "ssgr564i", 
        cookie: "dsfg98sdfg.sdfg09", 
        category: "sports",
        display: "HINDI 1",
        // A slightly different logo or same generic Star logo
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Star_Sports_logo.svg/2560px-Star_Sports_logo.svg.png" 
    },
    { 
        id: "sony_1", 
        url: "https://sony1.mp4", 
        name: "sony 1", 
        keyId: "sony_kid_1", 
        key: "sony_k_1", 
        cookie: "sony_c_1", 
        category: "more",
        display: "SONY 1",
        // Unique logo for Sony 1
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Sony_Pictures_Sports_Network_logo.svg/1024px-Sony_Pictures_Sports_Network_logo.svg.png" 
    }
];

// 2. DOM Elements
const sportsGrid = document.getElementById('sportsGrid');
const moreGrid = document.getElementById('moreGrid');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');

// 3. Render Function (Updated to use item.logoUrl)
function renderContent(filter = "") {
    sportsGrid.innerHTML = '';
    moreGrid.innerHTML = '';

    const filtered = channels.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));

    filtered.forEach(item => {
        const card = document.createElement('div');
        // Channel-card styling from CSS file is applied here
        card.className = "channel-card flex-none w-56 bg-white dark:bg-[#1a1d29] rounded-xl shadow-lg cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-800";
        
        // Dynamic Link Generation logic
        const finalUrl = `https://indusbhar.blogspot.com/?url=${item.url}&name=${item.name}&keyid=${item.keyId}&key=${item.key}&cookie=${item.cookie}`;

        // The image now uses dynamic URL source: src="${item.logoUrl}"
        card.innerHTML = `
            <div class="h-32 flex items-center justify-center p-4 bg-white">
                <img src="${item.logoUrl}" 
                     alt="${item.name} logo" class="max-h-full max-w-full object-contain">
            </div>
            <div class="p-3 text-center bg-gray-50 dark:bg-[#131620] font-bold text-sm tracking-widest border-t border-gray-100 dark:border-gray-800">
                ${item.display}
            </div>
        `;

        card.onclick = () => window.open(finalUrl, '_blank');

        if (item.category === "sports") sportsGrid.appendChild(card);
        else moreGrid.appendChild(card);
    });
}

// 4. Search Event
searchInput.onkeyup = (e) => renderContent(e.target.value);

// 5. Theme Toggle
themeToggle.onclick = () => {
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon.innerText = '🌙';
    } else {
        html.classList.add('dark');
        icon.innerText = '☀️';
    }
};

// Initial Load
renderContent();