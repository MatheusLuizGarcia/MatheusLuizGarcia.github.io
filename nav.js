// função de aparecimento dos blocos por detecção de scroll

function reveal() {
  var reveals = document.querySelectorAll(".reveal"); //detecta os elementos com a classe para mduar

  for (var i = 0; i < reveals.length; i++) { 
    var windowHeight = window.innerHeight;                    //assimila a altura visivel da pag
    var elementTop = reveals[i].getBoundingClientRect().top;  //assimila a pos do elemento
    var elementVisible = 300;                                 //assimila uma pos para detectar

    if (elementTop < windowHeight - elementVisible) { 
    //se o elemento passa da pos de detecção, ele troca a classe (realiza a animação)
      reveals[i].classList.add("active");
    } else {
    //assim que o elemento está fora da detecção, ele remove a classe, possibilitando fazer a animação dnv
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal); //aciona a função para os elementos da classe



//mesma função de antes, só que com uma altura menor (para o rodapé da página)
function reveal2() {
  var reveals2 = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals2.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals2[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals2[i].classList.add("active");
    } else {
      reveals2[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal2);