//using selectors inside the element

const questions = document.querySelectorAll('.question');
// console.log(questions);

questions.forEach(function (article) {
    const btn = article.querySelector('.question-btn')
    // console.log(article);
    // console.log(btn);
    btn.addEventListener('click', function(){
        // console.log(article);

        // check
        questions.forEach(function (item) {
            // if (item !== article && item.classList.contains('show-text')) {
            if (item !== article) {
                // console.log(item);
                item.classList.remove('show-text')                
            }
        })

        article.classList.toggle('show-text')
    })
})



















// 2nd method traversing the dom

// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(function(btn){
//     // console.log(btn);
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         // console.log(question);
//         question.classList.toggle('show-text')
//     })
// })
