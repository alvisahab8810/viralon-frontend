const header = document.querySelector(".header-section");
window.addEventListener("scroll", () => {
    window.scrollY > 0 ? header.classList.add("sticky") : header.classList.remove("sticky")
}), document.querySelectorAll("#myTab a").forEach(function(e) {
    var t = new bootstrap.Tab(e);
    e.addEventListener("mouseenter", function() {
        t.show()
    })
});



const whyUsItems = document.querySelectorAll(".why-us-items");
whyUsItems.forEach(e => {
    e.addEventListener("mouseover", () => {
        whyUsItems.forEach(e => e.classList.remove("active")), e.classList.add("active")
    })
});
const multipleItemCarousel = document.querySelector("#testimonialCarousel"),
    carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: !1
    });

    
var carouselWidth = $(".carousel-inner")[0].scrollWidth,
    cardWidth = $(".carousel-item").width(),
    scrollPosition = 0;

function autoplay() {
    $(".carousel-control-next").trigger("click"), setTimeout(autoplay, 3e3)
}
$(".carousel-control-next").on("click", function() {
    scrollPosition < carouselWidth - 3 * cardWidth ? (console.log("next"), scrollPosition += cardWidth, $(".carousel-inner").animate({
        scrollLeft: scrollPosition
    }, 800)) : (scrollPosition = 0, $(".carousel-inner").animate({
        scrollLeft: 0
    }, 800))
}), $(".carousel-control-prev").on("click", function() {
    scrollPosition > 0 ? (scrollPosition -= cardWidth, $(".carousel-inner").animate({
        scrollLeft: scrollPosition
    }, 800)) : (scrollPosition = carouselWidth - 3 * cardWidth, $(".carousel-inner").animate({
        scrollLeft: scrollPosition
    }, 800))
}), autoplay(), window.matchMedia("(max-width:575px)").matches && $(".carousel-control-next, .carousel-control-prev").hide();
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    this.parentNode.classList.add("focus")
}

function blurFunc() {
    let e = this.parentNode;
    "" == this.value && e.classList.remove("focus")
}
inputs.forEach(e => {
    e.addEventListener("focus", focusFunc), e.addEventListener("blur", blurFunc)
}), $(window).on("load", function() {
    setTimeout(function() {
        $("#exampleModalCenter").modal("show")
    }, 5e3)
});


const textArray = ["Clicks", "Leads", "Engagement", "Visibility", "Traffic", "ROI", "Followers"];
let currentIndex = 0;

function animateText() {
    let e = document.getElementById("animated-text-inner");
    e.textContent = "";
    let t = textArray[currentIndex],
        o = 0,
        r = setInterval(() => {
            e.textContent += t[o], ++o >= t.length && (clearInterval(r), setTimeout(() => {
                currentIndex = (currentIndex + 1) % textArray.length, animateText()
            }, 2e3))
        }, 50)
}
animateText(), setTimeout(function() {
    document.querySelectorAll(".lazy-iframe").forEach(function(e) {
        var t = document.createElement("iframe");
        t.src = "https://www.youtube.com/embed/GIBWr1zXJ_U", t.allowFullscreen = !0, e.innerHTML = "", e.appendChild(t)
    })

  
}, 5e3);

