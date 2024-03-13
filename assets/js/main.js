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
        switch (window.location.hash) {
            case "#about-us":
                $(".content").addClass("hiddenContent")
                setTimeout(() => {
                    this.document.querySelector(".aboutContent").classList.remove("hiddenContent")
                    this.document.querySelector(".aboutContent").classList.add("activeAni")
                },750);
                break;
            default: 
                $(".content").addClass("hiddenContent")
                setTimeout(() => {
                    this.document.querySelector(".homeContent").classList.remove("hiddenContent")
                    this.document.querySelector(".homeContent").classList.add("activeAni")
                },750);
                break;
        }
    }

    document.querySelector(".container__inner").classList.add("opening")
    setTimeout(() => {
        checkHash()
    },500);
    clearTimeout()
};

