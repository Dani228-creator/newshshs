// Sample Events Data
const eventsData = [
    {
        id: 1,
        title: 'Football Championship',
        category: 'sports',
        date: '2026-08-15',
        time: '3:00 PM',
        location: 'HSHS Stadium',
        description: 'Annual football championship clash. Watch the best teams compete for the trophy. Doors open at 2:00 PM.',
        image: '🏈'
    },
    {
        id: 2,
        title: 'Science Fair',
        category: 'academic',
        date: '2026-08-20',
        time: '10:00 AM',
        location: 'HSHS Auditorium',
        description: 'Showcase of innovative student projects and experiments. Judges and prizes for top projects.',
        image: '🔬'
    },
    {
        id: 3,
        title: 'Annual Cultural Night',
        category: 'cultural',
        date: '2026-08-25',
        time: '6:00 PM',
        location: 'HSHS Theatre',
        description: 'Celebrate diversity with cultural performances from around the world. Food, music, and dance.',
        image: '🎭'
    },
    {
        id: 4,
        title: 'Volleyball Tournament',
        category: 'sports',
        date: '2026-08-22',
        time: '4:00 PM',
        location: 'HSHS Gymnasium',
        description: 'Inter-school volleyball tournament. Best teams compete for the championship title.',
        image: '🏐'
    },
    {
        id: 5,
        title: 'Math Olympiad',
        category: 'academic',
        date: '2026-08-28',
        time: '2:00 PM',
        location: 'HSHS Computer Lab',
        description: 'Challenging math competition testing problem-solving skills. Prizes for top performers.',
        image: '📐'
    },
    {
        id: 6,
        title: 'Welcome Back Party',
        category: 'social',
        date: '2026-08-01',
        time: '5:00 PM',
        location: 'HSHS Cafeteria',
        description: 'Fun-filled welcome party for all students. Games, food, and great company.',
        image: '🎉'
    },
    {
        id: 7,
        title: 'Basketball Championship',
        category: 'sports',
        date: '2026-08-30',
        time: '7:00 PM',
        location: 'HSHS Arena',
        description: 'Exciting basketball finals. Will be a match to remember!',
        image: '🏀'
    },
    {
        id: 8,
        title: 'Debate Competition',
        category: 'academic',
        date: '2026-09-05',
        time: '1:00 PM',
        location: 'HSHS Main Hall',
        description: 'Inter-school debate championship on current issues.',
        image: '🎤'
    },
    {
        id: 9,
        title: 'Art Exhibition',
        category: 'cultural',
        date: '2026-09-10',
        time: '11:00 AM',
        location: 'HSHS Gallery',
        description: 'Showcase of student artwork. Paintings, sculptures, and digital art on display.',
        image: '🎨'
    },
    {
        id: 10,
        title: 'Sports Day',
        category: 'sports',
        date: '2026-09-12',
        time: '9:00 AM',
        location: 'HSHS Sports Field',
        description: 'Annual sports day with various athletic events. Registration open for all.',
        image: '⛹️'
    }
];

// Display Events
function displayEvents(events = eventsData) {
    const container = document.getElementById('eventsContainer');
    container.innerHTML = '';
    
    if (events.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No events found. Try different filters.</p>';
        return;
    }
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = `event-card ${event.category}`;
        eventCard.innerHTML = `
            <div class="event-header">
                <span class="event-category">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
                <h3 class="event-title">${event.image} ${event.title}</h3>
            </div>
            <div class="event-body">
                <div class="event-date">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(event.date)}</span>
                </div>
                <div class="event-time">
                    <i class="fas fa-clock"></i>
                    <span>${event.time}</span>
                </div>
                <div class="event-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${event.location}</span>
                </div>
                <p class="event-description">${event.description}</p>
            </div>
            <div class="event-footer">
                <button class="btn-event" onclick='openEventModal(${JSON.stringify(event).replace(/'/g, "\\'")})'>Learn More</button>
            </div>
        `;
        container.appendChild(eventCard);
    });
}

// Filter Events
function filterEvents() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    let filtered = eventsData;
    
    if (searchText) {
        filtered = filtered.filter(event => 
            event.title.toLowerCase().includes(searchText) ||
            event.description.toLowerCase().includes(searchText) ||
            event.location.toLowerCase().includes(searchText)
        );
    }
    
    if (category) {
        filtered = filtered.filter(event => event.category === category);
    }
    
    displayEvents(filtered);
}

// Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Update Statistics
function updateStats() {
    document.getElementById('totalEvents').textContent = eventsData.length;
    
    const today = new Date();
    const upcoming = eventsData.filter(event => new Date(event.date) >= today).length;
    document.getElementById('upcomingEvents').textContent = upcoming;
}

// Event Search with Enter Key
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            filterEvents();
        }
    });
}

// Initialize
window.addEventListener('load', function() {
    displayEvents();
    updateStats();
    console.log('Events loaded and displayed');
});
