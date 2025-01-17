const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    // console.log(id);
    if (id) {
        // remove selected from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        // hide other articles
        articles.forEach(function (article) {
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        // console.log(element);
        element.classList.add('active')
    }
})
