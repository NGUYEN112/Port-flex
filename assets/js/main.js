window.onload = function() { 
    $(".closeSideBarBtn").on("click", function() {
        closeSideBar()
    })

    $(".hambuger").on("click", function() {
        if($(this).hasClass("active")) {
            closeSideBar()
        }else {
            openSideBar()
        }
        $(this).toggleClass("active")
    })
    
    $(".menuBtn").on("click", function() {
        openSideBar()
    })

    function closeSideBar() {
        $(".sideBar").removeClass("extend")
        $(".container__inner").removeClass("limitSide")
        $(".closeSideBar").removeClass("show")
    }

    function openSideBar() {
        $(".sideBar").addClass("extend")
        $(".container__inner").addClass("limitSide")
        if(window.innerWidth > 768) {            
            $(".closeSideBar").addClass("show")
        }
    }


    window.addEventListener('hashchange', function() {
        checkHash() 
        $(".hambuger").trigger("click");
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
            case "#exp":
                $(".content").addClass("hiddenContent")
                setTimeout(() => {
                    this.document.querySelector(".expContent").classList.remove("hiddenContent")
                    this.document.querySelector(".expContent").classList.add("activeAni")
                },750);

                document.querySelector("header").innerHTML = "Experience"
                document.title = "Experience | Portfolio - Phan Nguyen Hoai Nguyen"
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


    /* slide about page */
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth: true
                }
            }
        ]
        /*infinite: false,*/
      });
    /* end slide */


    /* slide exp page */
    const expInfo = {
        "exp-1" : {
            "title": "Tomosia Da Nang",
            "logo": "/assets",
            "desc": [
                "Learned and worked with Nuxt.js and Vue.js in a QR code-related project",
            ]
        },
        "exp-2" : {
            "title": "Gosu Hue",
            "logo": "/assets",
            "desc": [
                "Strengthened knowledge and experience with Vue.js through game event website projects",
                "Improved understanding and experience with APIs",
            ]
        },
        "exp-3" : {
            "title": "DGW Asia Hue Brand",
            "logo": "/assets",
            "desc": [
                "Gained more experience using design tools such as: AI, Xd, InDesign, Figma",
                "Received training and learned about TypeScript and React.js",
            ]
        },
        "exp-4" : {
            "title": "Tomosia Da Nang",
            "logo": "/assets",
            "desc": [
                "Learned and worked with Nuxt.js and Vue.js in a QR code-related project",
            ]
        },
        "exp-5" : {
            "title": "Gosu Hue",
            "logo": "/assets",
            "desc": [
                "Strengthened knowledge and experience with Vue.js through game event website projects",
                "Improved understanding and experience with APIs",
            ]
        },
        "exp-6" : {
            "title": "DGW Asia Hue Brand",
            "logo": "/assets",
            "desc": [
                "Gained more experience using design tools such as: AI, Xd, InDesign, Figma",
                "Received training and learned about TypeScript and React.js",
            ]
        }
    }
    $(".listExpContain__logoItem").click(function() {
        switch ($(this).index()) {
            case 3:
                nextSlide()
                break;
            case 1:
                prevSlide()
                break;
            default:
                break;
        }
    })
    document.getElementById("next-exp").onclick =  function() {
        nextSlide()
    }
    document.getElementById("prev-exp").onclick =  function() {
        prevSlide()
    }

    function prevSlide() {
        let lists = document.querySelectorAll(".listExpContain__logoItem");
        document.getElementById("listExp").prepend(lists[lists.length -1])
        displayExp(lists[1].id)
    }
    function nextSlide() {
        let lists = document.querySelectorAll(".listExpContain__logoItem");
        document.getElementById("listExp").appendChild(lists[0])
        displayExp(lists[3].id)
    }
    /* display detail exp */
    function displayExp(id) {
        let expLogo = document.querySelector(".detailList__logo").children
        let expTitle = document.querySelector(".detailList__title")
        let expDetail = document.querySelector(".detailList__detail")

        expTitle.innerHTML = expInfo[id].title;
        expDetail.innerHTML = "";
        for(let i = 0;i < expInfo[id].desc.length; i++) {
            textTag = document.createElement("p")
            textTag.innerHTML = expInfo[id].desc[i]
            expDetail.append(textTag)
        }
    }
    displayExp("exp-1")
    /* end slide exp */



   
    /* project script */
    const projectInfo = {
        "prj-1" : {
            "name": "The Qira",
            "githubLink": false,
            "link": "https://Theqira.com",
            "tech": [
                "HTML5 - CSS3",
                "SASS",
                "JAVASCRIPT",
                "JQUERY",
            ],
            "detail": [
                "A personal portfolio website of a designer",
            ]
        },
        "prj-2" : {
            "name": "Elite",
            "githubLink": "https://github.com/NGUYEN112/elite",
            "link": "https://nguyen112.github.io/elite/",
            "tech": [
                "HTML5 - CSS3",
                "SASS",
                "JAVASCRIPT",
                "JQUERY",
            ],
            "detail": [
                "A static website of team of professionals that have over 40 years experience in the real estate industry in South Florida and we look forward to servicing your community's needs.",
            ]
        },
        "prj-3" : {
            "name": "Criptcon",
            "githubLink": "https://github.com/NGUYEN112/criptcon",
            "link": "https://nguyen112.github.io/criptcon/",
            "tech": [
                "HTML5 - CSS3",
                "SASS",
                "JAVASCRIPT",
                "JQUERY",
            ],
            "detail": [
                "A sample static website on the topic of crypto to be used as a template."
            ]
        },
        "prj-4" : {
            "name": "Cinerama Cinema",
            "githubLink": "bit.ly/2UwUwTJ",
            "link": "cinerama-cinema.hẻokuapp.com",
            "tech": [
                "HTML5 - CSS3 - SCSS",
                "PHP - Laravel",
                "TypeScript - Angular",
                "MySQL",
                "Bootstrap 5",
            ],
            "detail": [
                "Search for movie information and book tickets",
                "Manage movies, screening schedules, and users",
                "Manage tickets and revenue",
                "Assign roles for staff management",
            ]
        },
        "prj-5" : {
            "name": "Favorite Music",
            "githubLink": "https://github.com/NGUYEN112/react-vite-firestore-music",
            "link": "https://react-vite-music-app.netlify.app/",
            "tech": [
                "Html5 - CSS3 - SCSS",
                "TypeScript - ReactJS",
                "Firebase/firestore",
            ],
            "detail": [
                "ncludes basic features of a music player",
                "Allows users to create personal albums and add new songs via shared links (e.g., Dropbox)",
            ]
        }
    }
    $(".openProjectPop").click(function() {
        $(".projectPopup").addClass("show")
        openPopProject($(this)[0].id)
    })
    $(".projectPopup__close").click(function() {
        $(".projectPopup").removeClass("show")
    })
    function openPopProject(id) {
        console.log(1);
        
        var title = document.querySelector(".prjTitle")
        var githubLink = document.getElementById("github")
        var link = document.getElementById("webLink")
        var techList = document.getElementById("tech")
        techList.innerHTML = ""
        var detailList = document.getElementById("detail")
        detailList.innerHTML = ""

        title.innerText = projectInfo[id].name
        githubLink.href = projectInfo[id].githubLink
        link.href = projectInfo[id].link
        projectInfo[id].tech.forEach(ele => {
            let infoItem = document.createElement("li")
            infoItem.innerHTML = ele
            techList.append(infoItem)
        });
        projectInfo[id].detail.forEach(ele => {
            let infoItem = document.createElement("li")
            infoItem.innerHTML = ele
            detailList.append(infoItem)
        });
    }
};