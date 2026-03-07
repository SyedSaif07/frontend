if (!localStorage.getItem('c')){
    localStorage.setItem('c', 0)
}
// let c = 0
function count()
{
    let c = localStorage.getItem('c');
    c++;
    document.querySelector('h1').innerHTML = c;

    // if ( c % 5 == 0)
    // {
    //     alert(`Count is ${c}`)
    // }
    localStorage.setItem('c', c);
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('c');
    document.querySelector('button').onclick = count;
    // setInterval(count, 1000)
});