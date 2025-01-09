// const nav = `
//   <nav class="navbar">
//     <div class="nav-content">
//       <div class="nav-links">
//         <a href="index.html">Home</a>
//         <a href="projects.html">Projects</a>
//         <a href="blog.html">Blog</a>
//         <a href="resume.html">Resume</a>
//         <a href="contact.html">Contact</a>
//       </div>
//       <div class="theme-switcher">
//         <button class="theme-btn" data-theme="light">Light</button>
//         <button class="theme-btn" data-theme="dark">Dark</button>
//         <button class="theme-btn" data-theme="solarized-light">Solarized Light</button>
//         <button class="theme-btn" data-theme="solarized-dark">Solarized Dark</button>
//       </div>
//     </div>
//   </nav>
// `;

// // Initialize the app
// document.querySelector('body').insertAdjacentHTML('afterbegin', nav);

// // Theme switching
// const themeBtns = document.querySelectorAll('.theme-btn');
// themeBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     document.documentElement.setAttribute('data-theme', btn.dataset.theme);
//   });
// });

// // Smooth scroll for navigation
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// // Scroll animations
// const observerOptions = {
//   threshold: 0.1
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// }, observerOptions);

// document.querySelectorAll('.fade-in').forEach(element => {
//   observer.observe(element);
// });