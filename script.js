// ==========================================================================
// 1. KODI YA SLIDE SHOW (Picha Kujizungusha)
// ==========================================================================
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentSlide = 0;
const slideInterval = 5000; 
let autoSlide;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
    resetTimer();
}

function prevSlide() {
    showSlide(currentSlide - 1);
    resetTimer();
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

function startTimer() {
    autoSlide = setInterval(nextSlide, slideInterval);
}

function resetTimer() {
    clearInterval(autoSlide);
    startTimer();
}

startTimer();


// ==========================================================================
// 2. KODI YA LANGUAGE SWITCHER (Lugha Mbili - Imerekebishwa)
// ==========================================================================
const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = 'sw'; // Lugha ya kuanzia ni Kiswahili

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        
        // Hatua ya A: Badilisha bendera ya lugha (Toggle Language)
        if (currentLang === 'sw') {
            currentLang = 'en';
            langToggleBtn.textContent = 'Kiswahili'; 
        } else {
            currentLang = 'sw';
            langToggleBtn.textContent = 'English';
        }

        // Hatua ya B: Badilisha maandishi ya kawaida yote yenye [data-sw]
        const translatableElements = document.querySelectorAll('[data-sw]');
        translatableElements.forEach(element => {
            if (currentLang === 'en') {
                element.textContent = element.getAttribute('data-en');
            } else {
                element.textContent = element.getAttribute('data-sw');
            }
        });

        // Hatua ya C: Badilisha Placeholders za Fomu ya Maoni
        const placeholders = document.querySelectorAll('[data-sw-placeholder]');
        placeholders.forEach(input => {
            if (currentLang === 'en') {
                input.setAttribute('placeholder', input.getAttribute('data-en-placeholder'));
            } else {
                input.setAttribute('placeholder', input.getAttribute('data-sw-placeholder'));
            }
        });
        
    }); // <--- Mabano yote yamefungwa hapa sasa hivi kwa usahihi!
}
