const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imageNumber) {
    const image = new Image(); // 새로운 Image라는 object 생성하고 image라는 변수로 저장
    image.src = `image/${imageNumber + 1}.jpg`; // image의 src라는 key에 ~한 값 저장
    image.classList.add("bg-image");
    // console.log(image)
    body.prepend(image);
}

function getRandomNumber() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init() {
    const randomNumber = getRandomNumber();
    paintImage(randomNumber);
}

init()