window.onload = function () {
    const random = Math.ceil(Math.random() * 9);
    const randomImg = ('<img src = "images/' + random + '.jpg" alt = "random" />');
    document.querySelector('.js--img').innerHTML = randomImg;
    document.querySelector("img").width = window.innerWidth * 0.8;
    document.querySelector("img").height = window.innerHeight * 0.8;
}

