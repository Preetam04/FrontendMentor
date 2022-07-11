const hamburger = document.getElementById('hamburger');
const navMobileMenu = document.getElementById('mobile-nav');


const yellowLearnMore = document.getElementById('yellow-learn-more');
const redLearnMore = document.getElementById('red-learn-more');


const yellowTag = document.getElementById('yellow-tag');
const redTag = document.getElementById('red-tag');

const arrow = document.getElementById('arrow');
const section1 = document.getElementById('section1');

hamburger.addEventListener('click', function () {
    // navMobileMenu.classList.toggle('hidden');
    navMobileMenu.classList.toggle('opacity-100');
    arrow.classList.toggle('z-20');
    arrow.classList.toggle('-z-20');
});

const addOpacity = function (tag) {
    tag.style.opacity = '80%';
}

const removeOpacity = function (tag) {
    tag.style.opacity = '20%'

}


yellowLearnMore.addEventListener('mouseover', () => addOpacity(yellowTag));
yellowLearnMore.addEventListener('mouseout', () => removeOpacity(yellowTag));

redLearnMore.addEventListener('mouseover', (e) => addOpacity(redTag));
redLearnMore.addEventListener('mouseout', () => removeOpacity(redTag));

arrow.addEventListener('click', function () {
    console.log('this');
    section1.scrollIntoView({ behavior: 'smooth' })
})