document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    const mainContent = document.querySelector('main');

    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        mainContent.classList.toggle('nav-open');
    });

    // Close nav when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mainContent.classList.remove('nav-open');
        }
    });

    // Image carousel
    const carouselContainer = document.querySelector('.carousel-container');
    const images = carouselContainer.querySelectorAll('img');
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds

    // Function to create trip items
    function createTripItems() {
        const tripList = document.getElementById('trip-list');
        const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
        
        for (let i = 0; i < 10; i++) {
            const tripItem = document.createElement('li');
            tripItem.className = 'trip-item';
            tripItem.innerHTML = `
                <img src="https://source.unsplash.com/100x100/?city,${i}" alt="Trip thumbnail">
                <div class="trip-details">
                    <h3>${cities[i]} to ${cities[(i+1) % cities.length]}</h3>
                    <p>Date: June ${i + 1}, 2024</p>
                    <p>Time: ${10 + i}:00 AM</p>
                    <p>Seat: ${String.fromCharCode(65 + i)}${i + 1}</p>
                    <p class="status confirmed">Confirmed</p>
                </div>
            `;
            tripList.appendChild(tripItem);
        }
    }

    createTripItems();
});