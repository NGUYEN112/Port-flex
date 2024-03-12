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
};