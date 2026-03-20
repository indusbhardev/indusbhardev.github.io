        // --- DATA ---
        // Provided data structure, adjusted for easier access
        const channelData = [
            { id: 'star_hindi', url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/b17adfe543354fdd8d189b110617cddd/index.m3u8", name: "star hindi", keyId: "", key: "", cookie: "", language: 'Hindi', section: 'sports' },
            { id: 'star_hindi_1', url: "https://example2.mp4", name: "star hindi 1", keyId: "sgdfgojiogu9879", key: "ssgr564i", cookie: "dsfg98sdfg.sdfg09", language: 'Hindi 1', section: 'sports' },
            { id: 'star_telugu', url: "#", name: "Star Sports Telugu", keyId: "tel123", key: "telkey", cookie: "telcook", language: 'Telugu', section: 'sports' },
            { id: 'star_tamil', url: "#", name: "Star Sports Tamil", keyId: "tam123", key: "tamkey", cookie: "tamcook", language: 'Tamil', section: 'sports' },
            { id: 'star_english', url: "#", name: "Star Sports English", keyId: "eng123", key: "engkey", cookie: "engcook", language: 'English', section: 'sports' },
            { id: 'sony_1', url: "#", name: "SONY 1", keyId: "son1", key: "skey1", cookie: "scook1", language: 'Sports 1', section: 'more' },
            { id: 'sony_2', url: "#", name: "SONY 2", keyId: "son2", key: "skey2", cookie: "scook2", language: 'Sports 2', section: 'more' },
            { id: 'sony_3', url: "#", name: "SONY 3", keyId: "son3", key: "skey3", cookie: "scook3", language: 'Sports 3', section: 'more' }
        ];

        // --- DOM Elements ---
        const sportsGrid = document.getElementById('sportsGrid');
        const moreGrid = document.getElementById('moreGrid');
        const searchInput = document.getElementById('searchInput');
        const themeToggle = document.getElementById('themeToggle');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');

        // --- functions ---

        // 1. Create a link based on the required format
        function generateLink(channel) {
            const baseUrl = "https://indusbhar.blogspot.com/";
            const params = new URLSearchParams({
                url: channel.url,
                name: channel.name,
                keyid: channel.keyId,
                key: channel.key,
                cookie: channel.cookie
            });
            return `${baseUrl}?${params.toString()}`;
        }

        // 2. Render cards to a specific container
        function renderCards(data, container, sectionType) {
            container.innerHTML = ''; // Clear existing
            
            const filteredData = data.filter(item => item.section === sectionType);

            if (filteredData.length === 0) {
                container.innerHTML = '<div class="text-gray-500 italic p-4">No channels found.</div>';
                return;
            }

            filteredData.forEach(channel => {
                const card = document.createElement('div');
                card.className = "flex-none w-64 bg-brand-lightCard dark:bg-brand-darkCard rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100 dark:border-gray-800";
                
                // Determine logo type (Star or Sony)
                let logoHtml = '';
                if (channel.id.startsWith('star')) {
                    logoHtml = `
                        <div class="p-6 flex flex-col items-center justify-center h-40">
                            <div class="text-6xl text-gray-400 dark:text-gray-500">★<span class="text-5xl font-bold relative -top-1">1</span></div>
                            <div class="text-xs mt-1 text-gray-600 dark:text-gray-400 font-black tracking-widest">${channel.name}</div>
                            <div class="text-lg mt-1 font-semibold">${channel.language}</div>
                        </div>
                    `;
                } else if (channel.id.startsWith('sony')) {
                    logoHtml = `
                        <div class="p-4 flex flex-col items-center justify-center h-40">
                            <div class="w-24 h-24 rounded-lg bg-gradient-to-br from-purple-900 to-blue-900 flex flex-col items-center justify-center p-2 border-2 border-white/20">
                                <div class="text-xs font-bold text-white tracking-widest">SONY</div>
                                <div class="text-lg font-extrabold text-white mt-1">SPORTS</div>
                                <div class="text-3xl font-black text-white -mt-1">${channel.language.split(' ')[1]}</div>
                            </div>
                        </div>
                    `;
                }

                card.innerHTML = `
                    ${logoHtml}
                    <div class="bg-gray-100 dark:bg-[#151924] p-4 text-center text-sm font-medium border-t border-gray-200 dark:border-gray-800">
                        ${channel.name.toUpperCase()}
                    </div>
                `;

                // Add click event to open the generated link
                card.addEventListener('click', () => {
                    window.open(generateLink(channel), '_blank');
                });

                container.appendChild(card);
            });
        }

        // 3. Filter and re-render both sections
        function handleSearch() {
            const query = searchInput.value.toLowerCase();
            const filtered = channelData.filter(channel => 
                channel.name.toLowerCase().includes(query) || 
                channel.language.toLowerCase().includes(query)
            );
            renderCards(filtered, sportsGrid, 'sports');
            renderCards(filtered, moreGrid, 'more');
        }

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

        // Initial render
        renderCards(channelData, sportsGrid, 'sports');
        renderCards(channelData, moreGrid, 'more');

        // Event Listeners
        searchInput.addEventListener('keyup', handleSearch);
        themeToggle.addEventListener('click', toggleTheme);
