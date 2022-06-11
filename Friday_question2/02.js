class Slider {
    constructor(
        sliderSelector = '.slider',
        sliderContainerSelector = '.slider__container',
        previousSelector = '.previous',
        nextSelector = '.next',
        transitionTime = 3000,
    ) {
        this.slider = document.querySelector(sliderSelector);
        this.slides = document.querySelectorAll(`${sliderContainerSelector} img`).length; //number of slider that are in our slider markup
        this.sliderContainer = document.querySelector(sliderContainerSelector);
        this.previousBtn = document.querySelector(previousSelector);
        this.nextBtn = document.querySelector(nextSelector);
        this.slideSize = this.slider.offsetWidth; //width of slide for move slides one by one == 600px
        this.currentSlide = 0; //which slide that looking at

        this.setEventListeners();

    }

    moveSlides() {
        this.sliderContainer.style.transform = `translateX(-${this.currentSlide * this.slideSize}px)`; // 0*600  1*600   2*600 allows to move
    }

    nextSlide() {
        if (this.currentSlide < this.slides - 1) {
            this.currentSlide += 1;
        } else {
            this.currentSlide = 0;
        }
        this.moveSlides();
    };

    previousSlide() {
        this.currentSlide = this.currentSlide <= 0 ? this.slides - 1 : this.currentSlide - 1;
        this.moveSlides();
    };


    setEventListeners() {
        this.nextBtn.addEventListener('click', this.nextSlide.bind(this));
        this.previousBtn.addEventListener('click', this.previousSlide.bind(this));
    }

}

new Slider();


