
// // HTMLElement.prototype.pressKey = function(code) {
// // 	var evt = document.createEvent("UIEvents");
// // 	evt.keyCode = code;
// // 	evt.initEvent("keydown", true, true);
// // 	this.dispatchEvent(evt);
// // }

// // while(true){
// //   document.body.pressKey(13);
// //   console.log('GO')
// // }


const btn = document.getElementsByClassName('title')
btn.onclick = function () {
    alert('click complete!');
};

btn.addEventListener('click', () => {
    btn.click()
    setTimeout(function () { console.log('click') }, 1000)
});