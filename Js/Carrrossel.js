let indiceSlide = 0; //<- cria uma variavel indiceSlide e inicia com 0

mostrarSlides(indiceSlide); //<- chama a função mostrarSlides como indice 0, isso garante que o carrosel mostra a primeira imagem

function mudarSlide(n) { //< -cria uma função e atribui a ela um valor "n", logo após chama a função mostrarSlides e atribui o novo indice a ela, o que permite passar os slides
    mostrarSlides(indiceSlide += n);
}

function mostrarSlides(n) {
    let slides = document.getElementsByClassName("slides")[0].children;
    if (n >= slides.length) { indiceSlide = 0; } //<- Isso faz com que o slideshow comece novamente do início quando chegar ao final.
    if (n < 0) { indiceSlide = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) { //<- Define o estilo display de cada slide como "none", o que os torna invisíveis.
        slides[i].style.display = "none";  
    }
    slides[indiceSlide].style.display = "block";  //<-  Isso faz com que apenas o slide com o índice atual seja visível.
}
