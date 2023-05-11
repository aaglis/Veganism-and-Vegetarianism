// console.log("teste")

// const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('ul a');

// window.addEventListener('scroll', () => {
//   let current = '';
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute('id');
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove('ative');
//     if (link.getAttribute('href').includes(current)) {
//       link.classList.add('ative');
//     }
//   });
// });




function menuShow() {
  
  let header = document.querySelector('header')
  let title  = document.querySelector('#title')
  let button = document.querySelector('.navbar-mobile-menu')
  let menuMobile = document.querySelector('.navbar-mobile')


  if (menuMobile.classList.contains('open')) {

    menuMobile.classList.remove('open')
    header.classList.remove('padding-header')
    title.classList.remove('move-title')
    button.classList.remove('move-button')

    document.querySelector('.icon').src = "/components/icons8-menu-arredondado-30.png"
  } else {
    menuMobile.classList.add('open')
    header.classList.add('padding-header')
    title.classList.add('move-title')
    button.classList.add('move-button')
    
    document.querySelector('.icon').src = "/components/icons8-excluir-50.png"
  }

}
// function toggleParagraph(index) {
//   var paragraphId = "paragraph" + index;
//   var paragraph = document.getElementById(paragraphId);

//   for (var i = 1; i <= 4; i++) {
//     var otherParagraphId = "paragraph" + i;
//     var otherParagraph = document.getElementById(otherParagraphId);

//     if (otherParagraph !== paragraphId && !otherParagraph.classList.contains("open-paragrafo")) {
//         otherParagraph.classList.add("open-paragrafo");
//         console.log(`adicionei ao ${otherParagraph.id}`)
//     }
// }


//   if (paragraph.classList.contains("open-paragrafo")) {
//       paragraph.classList.remove("open-paragrafo");
//       console.log(`removi do ${paragraph.id}`)
//   } else {
//       paragraph.classList.add("open-paragrafo");
//       console.log(`adicionei ao ${paragraph.id}`)

//   }

// }

var lastParagraphId = "";

function toggleParagraph(index) {
  var paragraphId = "paragraph" + index;
  var paragraph = document.getElementById(paragraphId)

  if (paragraphId === lastParagraphId && !paragraph.classList.contains("open-paragrafo")) {
    paragraph.classList.add("open-paragrafo")
    lastParagraphId = ""
  }else {
    
    for (var i = 1; i <= 4; i++) {
      var otherParagraphId = "paragraph" + i
      var otherParagraph = document.getElementById(otherParagraphId)

      if (otherParagraphId !== paragraphId && !otherParagraph.classList.contains("open-paragrafo")) {
        otherParagraph.classList.add("open-paragrafo")
          }
        }
  paragraph.classList.remove("open-paragrafo")
  lastParagraphId = paragraphId
  }
}

if (window.matchMedia("(max-width: 1024px)").matches) {
  console.log("largura de 1024px!")
  var imagem = document.querySelector('.container-right')
  var filho = document.querySelector('.image-3')
  var imagemMobile = document.querySelector('.imagem-mobile')
  imagem.removeChild(filho)
  imagemMobile.appendChild(filho)
} else {
  imagemMobile.removeChild(filho)
  imagem.appendChild(filho)
}

