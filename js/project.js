function ProjectSlider (options) {

    let self = {};
    self.init = () => {

        self.element = options.sliderId;
        self.index = options.activeIndex;
        self.width = options.width;
        self.settings = {
            size: {
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
            }
        };
        self.slideItems = self.element.getElementsByClassName('project-slide');
        self.wrapper = self.element.getElementsByClassName('project-wrapper')[0];
        self.size = self.width > 900 ? self.settings.size.lg : self.width > 700 ? self.settings.size.md : self.width > 450 ? self.settings.size.sm : self.settings.size.xs;
        self.slideWidth = (self.width/self.size);
        self.wrapper.style.transform = 'translate3d('+ (-self.index*self.slideWidth) + 'px, 0, 0)';

        self.wrapper.style.width = (self.width*self.slideItems.length)+'px';
        for( let i = 0; i < self.slideItems.length; i++){
            self.slideItems[i].style.width=self.slideWidth+'px';
        }
    };

    window.addEventListener("resize", function() {
        self.width = innerWidth;
        self.size = self.width > 900 ? self.settings.size.lg : self.width > 700 ? self.settings.size.md : self.width > 450 ? self.settings.size.sm : self.settings.size.xs;
        self.slideWidth = (self.width/self.size);
        self.wrapper.style.width = (self.width*self.slideItems.length)+'px';
        for( let i = 0; i < self.slideItems.length; i++){
            self.slideItems[i].style.width=self.slideWidth+'px';
        }
        self.wrapper.style.transform = 'translate3d('+ (-self.index*self.slideWidth) + 'px, 0, 0)';
    }, false);

    self.moveSlide = (index) => {
        self.wrapper.style.transition = 'transform .5s ease';
        self.wrapper.style.transform = 'translate3d('+ (-index*self.slideWidth) + 'px, 0, 0)';
    };

    self.next = () => {
        self.index >= self.slideItems.length-1 ? false : self.index++;
        self.moveSlide(self.index);
        self.changeSlide();
    };

    self.prev = () => {
        self.index <= 0 ? false : self.index--;
        self.moveSlide(self.index);
        self.changeSlide();
    };

    self.changeSlide = () => {
        setTimeout(() => {
            self.wrapper.style.transition = 'none';
            self.slideItems[self.index].id === 'first-clone' ? self.index = 1 : self.index;
            self.slideItems[self.index].id === 'last-clone' ? self.index = self.slideItems.length-5 : self.index;
            self.wrapper.style.transform = 'translate3d('+ (-self.index*self.slideWidth) + 'px, 0, 0)';
        },600);
    };

    let moveLeft = document.getElementsByClassName('project-control-prev')[0],
        moveRight = document.getElementsByClassName('project-control-next')[0];


    moveLeft.addEventListener('click', () => { self.prev()});
    moveRight.addEventListener('click',() => { self.next()});

    self.init();
}