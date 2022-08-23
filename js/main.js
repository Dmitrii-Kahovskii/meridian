const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
	});
});

		





$(document).ready(function(){
      // $("#photo-carousel").owlCarousel({
      //     items:1,
      //     loop:true,
      //     nav:true,
      //     navText:["next&#x27","prev&#x27"],
      //     // navText:[&#x27;next&#x27;,&#x27;prev&#x27;],


      // });
    // находим элемент в котором будет инициализированна курусель (записана в переменную)
    const photoCarousel = $("#photo-carousel");
    // console.log(photoCarousel)
  //   // создаём карусель в элементе #photo-carousel
    photoCarousel.owlCarousel ({
      // items: 1,
      loop:true,
      // nav:true,
      navText:false,
      responsive : {
        // breakpoint from 0 up
        0 : {
          items: 1,
          dots:false,
          autoplay:true,
        },
        // breakpoint from 480 up
        768 : {
          items: 3,
          // nav:true,
          // navText:["Prev","Next"],
        },
        // breakpoint from 768 up
        1290 : {
          items: 4,
          // dots:false
        }
    }
    });

  // // // находим кнопки назад и вперед
    var btnPrev = $(".nav-btn-left");
    var btnNext = $(".nav-btn-right");
  // console.log(btnPrev)
  // console.log(btnNext)
    btnPrev.click(function() {
    photoCarousel.trigger('prev.owl.carousel')
    });
  
    btnNext.click(function () {
        photoCarousel.trigger('next.owl.carousel');
      });

})













    


