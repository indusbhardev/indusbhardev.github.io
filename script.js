document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    // 1. Prevent the browser from opening the original link
    e.preventDefault();

    // 2. Get the original URL
    const originalUrl = this.getAttribute('href');

    // 3. Construct the new URL
    const finalUrl = "https://indusbhar.blogspot.com/?url=" + encodeURIComponent(originalUrl);

    // 4. Redirect the user
    window.location.href = finalUrl;
  });
});