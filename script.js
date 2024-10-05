document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // हैमबर्गर आइकन पर क्लिक इवेंट
    hamburger.addEventListener('click', toggleMenu);

    // बाहर क्लिक करने पर मेनू बंद करने के लिए
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navLinks.classList.contains('show')) {
            toggleMenu();
        }
    });

    function toggleMenu() {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    }

    // Function to update visitor count
    function updateVisitorCount() {
        const countElement = document.getElementById('count');
        
        // Replace 'your-key-here' with a unique key for your website
        fetch('https://api.countapi.xyz/hit/visitors-count')
            .then(response => response.json())
            .then(data => {
                countElement.textContent = data.value;
            })
            .catch(error => {
                console.error('Error fetching visitor count:', error);
                countElement.textContent = 'Error loading count';
            });
    }

    // Initialize and update count when page loads
    document.addEventListener('DOMContentLoaded', function() {
        updateVisitorCount();
    });
});
