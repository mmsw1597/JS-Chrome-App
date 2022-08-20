const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

/*랜덤 배경화면 가져오기*/
const todaysImage = (images[Math.floor(Math.random() * images.length)]);
/*img 태그 생성*/
const bgImage = document.createElement("img");
/*src 어트리뷰트 부여*/
bgImage.src = `img/${todaysImage}`;
/*HTML 문서에 요소 추가*/
document.body.appendChild(bgImage);
