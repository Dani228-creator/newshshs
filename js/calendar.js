let currentDate = new Date();

// Generate Calendar
function generateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    
    const firstDayIndex = firstDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDayDate = prevLastDay.getDate();
    
    let html = `
        <div class="calendar-header">
            <button onclick="previousMonth()"><i class="fas fa-chevron-left"></i></button>
            <h3>${new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
            <button onclick="nextMonth()"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="weekdays">
            <div class="weekday">Sun</div>
            <div class="weekday">Mon</div>
            <div class="weekday">Tue</div>
            <div class="weekday">Wed</div>
            <div class="weekday">Thu</div>
            <div class="weekday">Fri</div>
            <div class="weekday">Sat</div>
        </div>
        <div class="days">
    `;
    
    // Previous month's days
    for (let i = firstDayIndex; i > 0; i--) {
        html += `<div class="day other-month">${prevLastDayDate - i + 1}</div>`;
    }
    
    // Current month's days
    for (let day = 1; day <= lastDayDate; day++) {
        const date = new Date(year, month, day);
        const isToday = date.toDateString() === new Date().toDateString();
        const hasEvent = hasEventOnDate(date);
        
        html += `<div class="day ${isToday ? 'today' : ''} ${hasEvent ? 'event-day' : ''}">${day}</div>`;
    }
    
    // Next month's days
    const remaining = 42 - (firstDayIndex + lastDayDate);
    for (let day = 1; day <= remaining; day++) {
        html += `<div class="day other-month">${day}</div>`;
    }
    
    html += `</div>`;
    
    document.getElementById('calendar').innerHTML = html;
}

// Check if date has events
function hasEventOnDate(date) {
    const dateString = date.toISOString().split('T')[0];
    return eventsData && eventsData.some(event => event.date === dateString);
}

// Previous Month
function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar();
}

// Next Month
function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar();
}

// Initialize Calendar
window.addEventListener('load', function() {
    setTimeout(() => {
        if (document.getElementById('calendar')) {
            generateCalendar();
            console.log('Calendar generated');
        }
    }, 100);
});