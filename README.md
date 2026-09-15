# ISM Portfolio Website

A modern, responsive portfolio website for documenting your Independent Study Mentorship (ISM) journey.

## Project Structure

```
my-ai-website/
├── index.html          # Main HTML file with all sections
├── css/
│   └── styles.css      # Complete styling and responsive design
├── js/
│   └── main.js         # Navigation, animations, and interactivity
├── assets/
│   └── images/         # Folder for your images and assets
└── README.md           # This file
```

## Features

### 8 Complete Sections:

1. **HOME** - Hero section with navigation, name, research topic, and inspirational quote
2. **ABOUT ME** - Professional headshot placeholder, bio, mission statement, and contact info
3. **RÉSUMÉ** - Resume preview with download links for PDF and Google Doc
4. **ABOUT ISM** - Information about the Independent Study Mentorship program
5. **MENTOR BIO** - Dedicated mentor section (marked as "Coming Soon - ISM 2")
6. **RESEARCH** - Four categorized cards for Research, Interviews, Mentor Visits, and Observations
7. **BLOG** - Reverse-chronological blog feed layout for weekly entries
8. **PROJECTS** - Two subsections: "Original Work" and "Final Product"

## Customization Guide

### 1. Update Your Information

Search for placeholders in `index.html` and replace them with your information:

- `[Your Name]` - Your full name
- `[Your Research Topic]` - Your ISM research topic
- `[your field of study]` - Your field/industry
- `[your.email@example.com]` - Your email address
- `(123) 456-7890` - Your phone number
- `[Your School Name]` - Your school

### 2. Add Your Photos

Replace placeholder images by:

1. Add your professional headshot to `assets/images/headshot.jpg`
2. Add your mentor's photo (when available) to `assets/images/mentor.jpg`
3. Update the HTML to reference these images:

```html
<!-- Replace the headshot placeholder -->
<div class="headshot-placeholder">
  <img src="assets/images/headshot.jpg" alt="Your Name">
</div>

<!-- Replace the mentor image placeholder -->
<div class="mentor-image-placeholder">
  <img src="assets/images/mentor.jpg" alt="Mentor Name">
</div>
```

### 3. Update the Quote

Change the inspirational quote in the HOME section to one that resonates with you.

### 4. Add Your Résumé

1. Upload your résumé PDF to `assets/resume.pdf`
2. Update the download link in `index.html`:

```html
<a href="assets/resume.pdf" class="download-btn pdf-btn" download>
```

For Google Docs, share your résumé and paste the shareable link.

### 5. Customize Colors

Edit the color scheme in `css/styles.css` by modifying the CSS variables:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Secondary brand color */
    --accent-color: #f59e0b;       /* Accent/highlight color */
}
```

### 6. Add Blog Entries

Add new blog entries in reverse chronological order (newest first) in the BLOG section:

```html
<article class="blog-entry">
    <div class="blog-meta">
        <span class="blog-date"><i class="far fa-calendar"></i> Week X - [Date]</span>
        <span class="blog-category"><i class="fas fa-tag"></i> Category</span>
    </div>
    <h3 class="blog-title">Your Blog Title</h3>
    <div class="blog-excerpt">
        <p>Your blog excerpt...</p>
    </div>
    <a href="#" class="read-more">Read Full Entry <i class="fas fa-arrow-right"></i></a>
</article>
```

### 7. Update Research Counts

As you complete assessments, update the count numbers in the RESEARCH section:

```html
<div class="assessment-count">
    <span class="count">5</span>  <!-- Update this number -->
    <span class="label">Entries</span>
</div>
```

### 8. Add Project Details

Update the PROJECTS section with your actual work, methodology, and findings.

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Navigate**: Click on navigation links or scroll to explore sections
3. **Mobile**: Fully responsive - works perfectly on phones and tablets

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript** - Smooth scrolling, animations, and interactivity
- **Font Awesome** - Icons throughout the site
- **Google Fonts** - Poppins and Playfair Display typography

## Browser Compatibility

Works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Create a Netlify account
2. Drag and drop your project folder
3. Get instant deployment with a custom URL

### Option 3: Google Drive
1. Upload files to Google Drive
2. Share the folder publicly
3. Use a service like DriveToWeb

## Tips for Success

- **Regular Updates**: Add blog entries weekly to document your ISM journey
- **Professional Photos**: Use high-quality, professional images
- **Keep it Current**: Update research counts and project progress regularly
- **Backup**: Keep copies of your work in multiple locations
- **Test**: Always test the site on different devices and browsers

## Need Help?

- Check browser console (F12) for any errors
- Ensure all file paths are correct
- Verify images are in the correct format (JPG, PNG)
- Make sure all files are in the right folders

## Future Enhancements

Consider adding:
- Individual blog post pages
- Detailed project pages
- Photo galleries
- Video presentations
- Contact form
- Dark mode toggle
- Scroll-to-top button

---

**Good luck with your ISM journey!** This portfolio will serve as a comprehensive documentation of your research, growth, and achievements throughout the program.
