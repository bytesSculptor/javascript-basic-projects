const span = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
let count = 0;


btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        let className = e.currentTarget.classList;
        if(className.contains('increase')){
            count++;
        } else if(className.contains('decrease')){
            count--;
        } else {
            count = 0
        }
        span.textContent = count

        if(count > 0){
            span.style.color = 'green'
        } else if(count < 0){
            span.style.color = 'red'
        } else{
            span.style.color = "#000"
        }
    })
})