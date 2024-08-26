let indiceSlide = 0;
mostrarSlides(indiceSlide);

function mudarSlide(n) {
    mostrarSlides(indiceSlide += n);
}

function mostrarSlides(n) {
    let slides = document.getElementsByClassName("slides")[0].children;
    if (n >= slides.length) { indiceSlide = 0; }
    if (n < 0) { indiceSlide = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[indiceSlide].style.display = "block";  
}
