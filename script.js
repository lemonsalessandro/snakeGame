let nick = document.querySelector("#nickname");
let formPlayer = document.querySelector(".info-player");
let playBtn = document.getElementById("play");
let snakeColor = document.getElementById("snake-color");
let wall = document.getElementById("wall");
let bestScore = document.getElementById('best');


playBtn.addEventListener("click", function (e) {
    if (nick.value.length < 3) {
        alert("Escolha um nickname!");
        console.log(nick.value)
        nick.style.border = "2px solid red";
    } else {
        localStorage.setItem('snakeColor', snakeColor.value)
        localStorage.setItem('playerName', nick.value)
        localStorage.setItem('wall', wall.checked)
        let link = document.createElement("a");
        link.href = "game.html";
        link.click();
    }
    e.preventDefault();
});

// anime({
//   targets: '.el',
//   translateX: 250,
//   direction: 'alternate',
//   loop: true,
//   autoplay: true,
//   easing: 'linear'
// });

anime({
  targets: '#mainSvg',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 5000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


if (!localStorage.getItem('playerName')) {
    localStorage.setItem('playerName', "xxxx")
}


if (!localStorage.getItem('bestScore')) {
    localStorage.setItem('bestScore', 0)
}

bestScore.innerHTML = `${localStorage.getItem('playerName')} - ${localStorage.getItem('bestScore')}`;