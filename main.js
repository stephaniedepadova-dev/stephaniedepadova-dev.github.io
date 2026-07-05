'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // Footer - Current Year
    const currentYear = document.getElementById('current-year');

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Privacy - Last Updated
    const lastUpdated = document.getElementById('last-updated');

    if (lastUpdated) {
        lastUpdated.textContent = new Date().toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });
    }

    // Active Navigation Link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.menu a').forEach(link => {
        const href = link.getAttribute('href');

        if (href === currentPage) {
            link.classList.add('active');
        }
    });

});


// Card reveal animation
const cards=document.querySelectorAll('.card');
if(cards.length){
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});
 },{threshold:0.15});
 cards.forEach(c=>observer.observe(c));
}
