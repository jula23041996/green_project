//SWIPER HOMEPAGE
// Инициализируем Swiper
let myImageSlider1 = new Swiper('#swiper-container1', {
	
	// Стрелки
	navigation: {
		nextEl: '.next',
		prevEl: '.previous'
	},

	// Скролл

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 3,
	
	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 1,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,
	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.

    //Листание
	effect: 'slide',

	
	
	// Брейк поинты (адаптив)
	// Ширина экрана
	
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 2,
		},
		1315: {
			slidesPerView: 3,
		}
	},
	
	
	
/*
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 1,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	},
*/
	

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
	},

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,
});


// Fixed navbar
const sidenav = document.getElementById("mySidenav");
const heroImage = document.querySelector(".hero-image__container");
const footer = document.querySelector(".footer__container");
const heroImageHeight = heroImage.offsetHeight;
const sidenavTop = sidenav.offsetTop;
const sidenavBottom = sidenav.offsetBottom;
const sidenavHeight = sidenav.offsetHeight;
const footerTop = footer.offsetTop;
const distanceToFooter = footerTop - sidenavTop + sidenavHeight;

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= heroImageHeight) {
    sidenav.classList.add("fixed");
    sidenav.style.top = "0";
  } else {
    sidenav.classList.remove("fixed");
    sidenav.style.top = sidenavTop - heroImageHeight + "px";
  }
  if (window.pageYOffset + sidenavHeight >= footerTop) {
    const newTop = footerTop - distanceToFooter;
    sidenav.style.top = newTop + "px";
  }
});
/*
// Get all elements with the class 'toggle-div'
const toggleDivs = document.querySelectorAll('.stage');

// Attach a click event listener to each toggle div
toggleDivs.forEach(function(div) {
  div.addEventListener('click', function() {
    // Get the next sibling element of the clicked div
    const targetDiv = div.firstElementChild;
	const targetDiv2 = div.lastElementChild;
    // Toggle the display of the target div
    if (targetDiv.style.display === 'none') {
      targetDiv.style.display = 'block';
	  targetDiv2.style.display = 'none';
    } else {
      targetDiv.style.display = 'none';
	  targetDiv2.style.display = 'block';
    }
  });
});
toggleDivs.forEach(function(div) {
	div.addEventListener('mouseenter', function() {
	  // Get the next sibling element of the clicked div
	  const targetDiv = div.firstElementChild;
	  const targetDiv2 = div.lastElementChild;
	  // Toggle the display of the target div
	  if (targetDiv.style.display === 'none') {
		targetDiv.style.display = 'block';
		targetDiv2.style.display = 'none';
	  } else {
		targetDiv.style.display = 'none';
		targetDiv2.style.display = 'block';
	  }
	});
  });
  toggleDivs.forEach(function(div) {
	div.addEventListener('mouseleave', function() {
	  // Get the next sibling element of the clicked div
	  const targetDiv = div.firstElementChild;
	  const targetDiv2 = div.lastElementChild;
	  // Toggle the display of the target div
	  if (targetDiv.style.display === 'none') {
		targetDiv.style.display = 'block';
		targetDiv2.style.display = 'none';
	  } else {
		targetDiv.style.display = 'none';
		targetDiv2.style.display = 'block';
	  }
	});
  });
*/

//Toggling for divs
const toggleDivs = document.querySelectorAll('.stage');

function toggleDisplay() {
  // Get the next sibling element of the clicked div
  const targetDiv = this.firstElementChild;
  const targetDiv2 = this.lastElementChild;
  // Toggle the display of the target div
  if (targetDiv.style.display === 'none') {
    targetDiv.style.display = 'block';
    targetDiv2.style.display = 'none';
  } else {
    targetDiv.style.display = 'none';
    targetDiv2.style.display = 'block';
  }
}

// Add click event listener for all screen sizes
toggleDivs.forEach(function(div) {
  div.addEventListener('click', toggleDisplay);
});

// Add mouseenter and mouseleave event listeners for desktop only
if (window.innerWidth < 1024) {
  toggleDivs.forEach(function(div) {
    div.addEventListener('mouseenter', toggleDisplay);
    div.addEventListener('mouseleave', toggleDisplay);
  });
}
  
//Toggling for parts 
const toggleParts = document.querySelectorAll('.sustainability__part');

function toggleDisplay() {
  // Get the next sibling element of the clicked div
  const targetPart = this.firstElementChild;
  const targetPart2 = this.lastElementChild;
  // Toggle the display of the target div
  if (targetPart.style.display === 'none') {
    targetPart.style.display = 'block';
    targetPart2.style.display = 'none';
  } else {
    targetPart.style.display = 'none';
    targetPart2.style.display = 'block';
  }
}

if (window.matchMedia('(max-width: 1024px)').matches) {
  toggleParts.forEach(function(part) {
    part.addEventListener('click', toggleDisplay);
    part.removeEventListener('mouseenter', toggleDisplay);
    part.removeEventListener('mouseleave', toggleDisplay);
  });
} else {
  toggleParts.forEach(function(part) {
    part.removeEventListener('click', toggleDisplay);
    part.addEventListener('mouseenter', toggleDisplay);
    part.addEventListener('mouseleave', toggleDisplay);
  });
}

// Get all the dropdown buttons
const dropdownButtons2 = document.querySelectorAll('.item__subtitle');

// Loop through the dropdown buttons and add event listeners
dropdownButtons2.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the dropdown content that is next to the button
    const dropdownContent = button.nextElementSibling;

    // Toggle the display of the dropdown content
    dropdownContent.classList.toggle('show');
  });
});

// Инициализируем Swiper
let myImageSlider2 = new Swiper('#swiper-container2', {
	// Стрелки
	navigation: {
		nextEl: '.next2',
		prevEl: '.previous2'
	},

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 1,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,
	

	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',

	
	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',	
	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1.5,
		},
		992: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},

	/*
	// Брейк поинты (адаптив)
	// Соотношение сторон
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	},
	*/

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
	},
	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

});
