// async function getData() {
//     try {
//         const response = await fetch('http://127.0.0.1:5000/begin');
//         if (!response.ok) {
//             throw new Error('Network response was not ok' + response.statusText);
//         }
//         const data = await response.json();
//         console.log(data);
//         document.getElementById('mountHere').innerHTML = JSON.stringify(data, null, 2)
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// document.getElementById('learnMoreBtn').addEventListener('click', getData);
AOS.init();

// script.js

document.addEventListener('DOMContentLoaded', function () {
    AOS.init(); // Initialize AOS

    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.remove('navbar-visible');
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('navbar-hidden');
            navbar.classList.add('navbar-visible');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});


