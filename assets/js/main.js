window.onload = function() { 
    $(".closeSideBarBtn").on("click", function() {
        $(".sideBar").removeClass("extend")
        $(".container__inner").removeClass("limitSide")
        $(".closeSideBar").removeClass("show")
    })

    $(".menuBtn").on("click", function() {
        $(".sideBar").addClass("extend")
        $(".container__inner").addClass("limitSide")
        $(".closeSideBar").addClass("show")
    })


    window.addEventListener('hashchange', function() {
        checkHash() 
    });
    
    function checkHash() {
        $(".content").removeClass("activeAni")
        $(".content").removeClass("endAni")
        switch (window.location.hash) {
            case "#about-us":
                $(".content").addClass("hiddenContent")
                setTimeout(() => {
                    this.document.querySelector(".aboutContent").classList.remove("hiddenContent")
                    this.document.querySelector(".aboutContent").classList.add("activeAni")
                },750);
                setTimeout(() => {
                    this.document.querySelector(".aboutContent").classList.add("endAni")
                    this.document.querySelector(".aboutContent").classList.remove("activeAni")
                },2250);

                document.querySelector("header").innerHTML = "About us"
                document.title = "About Us | Portfolio - Phan Nguyen Hoai Nguyen"
                break;
            case "#project":
                $(".content").addClass("hiddenContent")
                setTimeout(() => {
                    this.document.querySelector(".projectContent").classList.remove("hiddenContent")
                    this.document.querySelector(".projectContent").classList.add("activeAni")
                },750);

                document.querySelector("header").innerHTML = "Projects"
                document.title = "Projects | Portfolio - Phan Nguyen Hoai Nguyen"
                break;
            default: 
                $(".content").addClass("hiddenContent")
                setTimeout(() => {
                    this.document.querySelector(".homeContent").classList.remove("hiddenContent")
                    this.document.querySelector(".homeContent").classList.add("activeAni")
                },750);

                document.querySelector("header").innerHTML = "Home"
                document.title = "Home | Portfolio - Phan Nguyen Hoai Nguyen"
                break;
        }
    }

    document.querySelector(".container__inner").classList.add("opening")
    setTimeout(() => {
        checkHash()
    },500);
    clearTimeout()


    var listInfo = $('.listInfo');
    listInfo.on('init', function(event, slick, currentSlide) {
        var
          cur = $(slick.$slides[slick.currentSlide]),
          next = cur.next(),
          next2 = cur.next().next(),
          prev = cur.prev(),
          prev2 = cur.prev().prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');  
        prev2.addClass('slick-sprev2');
        next2.addClass('slick-snext2');  
        cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
        slick.$prev = prev;
        slick.$next = next;
      }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        console.log('beforeChange');
        var
          cur = $(slick.$slides[nextSlide]);
        console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        slick.$prev.prev().removeClass('slick-sprev2');
        slick.$next.next().removeClass('slick-snext2');
        next = cur.next(),  
        prev = cur.prev();
        //prev2.prev().prev();
        //next2.next().next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        prev.prev().addClass('slick-sprev2');
        next.next().addClass('slick-snext2');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
      });
      
      listInfo.slick({
        speed: 1000,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        // prevArrow: '<button> prev</button>',
        // nextArrow: '<button> next</button>',
        infinite: true,
        centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        customPaging: function(slider, i) {
          return '';
        },
        /*infinite: false,*/
      });
};

