const carouselData = [
    {
        img: "Images/carousel-1.png",
        bg: "#8ea812",
        bgText: "Images/background-text.png",
        title: "Sublime <br/> Lime",
    },
    {
        img: "Images/carousel-2.png",
        bg: "#b24726",
        bgText: "Images/background-text.png",
        title: "Caramel <br/> Crave",
    },
    {
        img: "Images/carousel-3.png",
        bg: "#5c2814",
        bgText: "Images/background-text.png",
        title: "Creamy <br/> Coffee",
    },
];

let currentIndex = 0;

const carouselImg = document.querySelector(".carousel-img");
const backgroundText = document.querySelector(".background-text");
const textH1 = document.querySelector(".text h1");
const body = document.body;

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");


//ANIMATION
function animateElements() {

    //Remove animation
    carouselImg.classList.remove("animate-top");
    backgroundText.classList.remove("animate-right");
    textH1.classList.remove("animate-scale");

    // Force reflow to restart animation
    void carouselImg.offsetWidth;

    //Add animation
    carouselImg.classList.add("animate-top");
    backgroundText.classList.add("animate-right");
    textH1.classList.add("animate-scale");
}


function updateCarousel(index) {
    const data = carouselData[index];
    carouselImg.src = data.img;
    backgroundText.src = data.bgText;
    textH1.innerHTML = data.title;
    body.style.background = data.bg;

    animateElements();
}

// Arrow click events
rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel(currentIndex);
});

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel(currentIndex);
});

// Initial load
updateCarousel(currentIndex);