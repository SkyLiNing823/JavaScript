//callback 回呼
window.addEventListener('load', function () {
    const a = document.getElementById('title')
    console.log(a)
    a.innerText = '改掉了'

    const btn = document.getElementById('btn1')
    btn.addEventListener('click', function () {
        console.log('click')
    })

    const box = document.getElementById('test')
    box.innerHTML = '<p>Test</p>'

    const inputs = document.getElementById('input')

    inputs.addEventListener('keyup', function (e) {
        console.log(e.target.value)

    })
})