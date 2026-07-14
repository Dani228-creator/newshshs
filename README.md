# HSHS Events - Hawthorne Scribner High School

A professional and modern event management website for Hawthorne Scribner High School. Get the latest updates on sports, academic competitions, cultural events, and social gatherings.

## Features

### 🎯 Core Features
- **Event Display**: Beautiful card-based layout for all upcoming events
- **Advanced Search & Filter**: Search events by title, description, or location. Filter by category
- **Interactive Calendar**: Month view calendar with event indicators
- **Event Details Modal**: Click any event to view detailed information
- **Registration System**: Users can register for events directly
- **Statistics Dashboard**: Quick overview of total and upcoming events
- **Contact Form**: Get in touch with the school administration
- **Responsive Design**: Fully mobile-friendly interface

### 📱 Design Features
- **Modern UI/UX**: Professional gradient designs and smooth animations
- **Mobile Optimized**: Hamburger menu for mobile devices
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized CSS and JavaScript for fast loading
- **Visual Hierarchy**: Clear categorization with color-coded events

## Events Categories

1. **Sports** (Red) - Tournaments, championships, and athletic events
2. **Academic** (Blue) - Competitions, fairs, and educational events
3. **Cultural** (Purple) - Performances, exhibitions, and cultural celebrations
4. **Social** (Orange) - Gatherings, parties, and community events

## File Structure

```
newshshs/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styling and responsive design
├── js/
│   ├── main.js             # Core functionality and interactions
│   ├── events.js           # Event management and filtering
│   └── calendar.js         # Calendar generation and management
└── README.md               # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and Animations
- **JavaScript (Vanilla)**: Pure JS - no dependencies
- **Font Awesome**: Icon library
- **Responsive Design**: Mobile-first approach

## Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Dani228-creator/newshshs.git
   cd newshshs
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx serve
     ```

3. **Access the Website**
   - Open `http://localhost:8000` in your browser

## Usage Guide

### Searching Events
1. Enter event name, description, or location in the search box
2. Select a category from the dropdown (optional)
3. Click "Filter" or press Enter to search

### Viewing Event Details
1. Hover over any event card to see the preview animation
2. Click "Learn More" to open the detailed modal
3. Close the modal by clicking the X or outside the modal

### Calendar Navigation
1. Use arrow buttons to navigate between months
2. Red dots indicate dates with scheduled events
3. Today's date is highlighted in blue

### Contact
1. Fill out the contact form at the bottom
2. Click "Send Message"
3. You'll receive a confirmation message

## Customization

### Adding New Events

Edit `js/events.js` and add to the `eventsData` array:

```javascript
{
    id: 11,
    title: 'Event Name',
    category: 'sports', // or 'academic', 'cultural', 'social'
    date: '2026-09-15',
    time: '3:00 PM',
    location: 'HSHS Location',
    description: 'Event description here',
    image: '🎯' // emoji or icon
}
```

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... more colors */
}
```

### Updating School Information

- Replace "Hawthorne Scribner High School" with your school name
- Update contact information in the footer
- Add your school logo if desired

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Minified CSS and JavaScript files
- Lazy loading for events
- Optimized animations
- Compressed images (when added)
- Mobile-first responsive design

## Future Enhancements

- [ ] Admin dashboard for event management
- [ ] User authentication system
- [ ] Email notifications for upcoming events
- [ ] Social media integration
- [ ] Event filtering by time range
- [ ] Dark mode theme
- [ ] Event attendance tracking
- [ ] Push notifications
- [ ] Multi-language support
- [ ] Backend API integration

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/improvement`)
5. Create a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please:
- Open an issue on GitHub
- Contact: school@hawthornescribner.edu

## Credits

- Designed and developed for Hawthorne Scribner High School
- Icons from Font Awesome
- Modern web standards and best practices

---

**Last Updated**: July 14, 2026

**Version**: 1.0.0
