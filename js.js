var u  = document.createElement("img");
u.src = "images/01.jpg";

window.onload = function() {
  document.querySelector('#rotate').appendChild(u);
};

var pic = 1;

document.querySelector('#rotate').addEventListener("mousemove", rotate);

document.querySelector('#rotate').addEventListener("mousewheel", rotate);

function rotate(event) {
  var X = event.offsetX
  console.log('X',event.offsetX);
  console.log(event.toElement.clientWidth);
  console.log('pic', pic);
  console.log('wheel',event.wheelDelta);
  pic  = Math.round(X*69/event.toElement.clientWidth);
  if (pic>1 && pic <=9) {
    u.src = 'images/0' + pic + '.jpg';
  } else if (pic > 9 && pic< 69) {
    u.src = 'images/' + pic + '.jpg';
  } else if (pic > 69 ) {
    pic = 1;
  } else {
    pic = 69;
  }
}
