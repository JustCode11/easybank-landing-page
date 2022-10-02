// Open Mobile Hamburger Menu

const body = document.querySelector('body');
const hamburgerMenuContainer = document.querySelector('.hamburgerMenuContainer');
const hamburgerMenuButton = document.querySelector('#hamburgerMenuButton');

hamburgerMenuButton.addEventListener('click', handleHamburgerMenu);

function handleHamburgerMenu() {
    if (hamburgerMenuContainer.classList.contains('hide')) {
        hamburgerMenuButton.classList.add('open');
        body.classList.add('noScrollY');
        hamburgerMenuContainer.classList.remove('fade-out');
        hamburgerMenuContainer.classList.add('fade-in');
        hamburgerMenuContainer.classList.remove('hide');
    } else {
        hamburgerMenuButton.classList.remove('open');
        body.classList.remove('noScrollY');
        hamburgerMenuContainer.classList.remove('fade-in');
        hamburgerMenuContainer.classList.add('fade-out');
        hamburgerMenuContainer.classList.add('hide');
    }
}

// Article Fade in on scroll

const allArticle = document.querySelectorAll('article');
const options = {
    threshold: .4,
    rootMargin: "0px 0px -10px 0px"
};

const observer = new IntersectionObserver(fadeInOnScroll, options);

function fadeInOnScroll(articles, observer) {
    articles.forEach(article => {
        if (!article.isIntersecting) {
            return;
        } else {
            article.target.classList.add('article-appear');
            observer.unobserve(article.target);
        }
    })
}

allArticle.forEach(article => {
    observer.observe(article);
});