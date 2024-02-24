function showButton(box) {
    box.querySelector('.overlay').style.opacity = 0.8;
    box.querySelector('.text').style.opacity = 0;
}

function hideButton(box) {
    box.querySelector('.overlay').style.opacity = 0;
    box.querySelector('.text').style.opacity = 1;
}

function redirectToLink(link) {
    window.location.href = link;
}
