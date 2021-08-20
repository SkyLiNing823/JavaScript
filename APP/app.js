const btn = document.getElementById('show')
while (true) {
    setTimeout(function () { btn.click() }, 1000);
}


btn.addEventListener('click', function () {
    btn.innerHTML = "<img src='./img/6.jpg' id='img'>"
    setTimeout(function () { btn.innerHTML = "<img src='./img/2.jpg' id='img'>" }, 300);
})