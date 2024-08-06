const header=document.querySelector(".header-section");window.addEventListener("scroll",()=>{window.scrollY>0?header.classList.add("sticky"):header.classList.remove("sticky")}),document.querySelectorAll("#myTab a").forEach(function(e){var t=new bootstrap.Tab(e);e.addEventListener("mouseenter",function(){t.show()})});const whyUsItems=document.querySelectorAll(".why-us-items");whyUsItems.forEach(e=>{e.addEventListener("mouseover",()=>{whyUsItems.forEach(e=>e.classList.remove("active")),e.classList.add("active")})});const multipleItemCarousel=document.querySelector("#testimonialCarousel"),carousel=new bootstrap.Carousel(multipleItemCarousel,{interval:!1});var carouselWidth=$(".carousel-inner")[0].scrollWidth,cardWidth=$(".carousel-item").width(),scrollPosition=0;function autoplay(){$(".carousel-control-next").trigger("click"),setTimeout(autoplay,3e3)}$(".carousel-control-next").on("click",function(){scrollPosition<carouselWidth-3*cardWidth?(console.log("next"),scrollPosition+=cardWidth,$(".carousel-inner").animate({scrollLeft:scrollPosition},800)):(scrollPosition=0,$(".carousel-inner").animate({scrollLeft:0},800))}),$(".carousel-control-prev").on("click",function(){scrollPosition>0?(scrollPosition-=cardWidth,$(".carousel-inner").animate({scrollLeft:scrollPosition},800)):(scrollPosition=carouselWidth-3*cardWidth,$(".carousel-inner").animate({scrollLeft:scrollPosition},800))}),autoplay(),window.matchMedia("(max-width:575px)").matches&&$(".carousel-control-next, .carousel-control-prev").hide();const inputs=document.querySelectorAll(".input");function focusFunc(){this.parentNode.classList.add("focus")}function blurFunc(){let e=this.parentNode;""==this.value&&e.classList.remove("focus")}inputs.forEach(e=>{e.addEventListener("focus",focusFunc),e.addEventListener("blur",blurFunc)}),$(window).on("load",function(){setTimeout(function(){$("#exampleModalCenter").modal("show")},5e3)});const textArray=["Clicks","Leads","Engagement","Visibility","Traffic","ROI","Followers"];let currentIndex=0;function animateText(){let e=document.getElementById("animated-text-inner");e.textContent="";let t=textArray[currentIndex],o=0,n=setInterval(()=>{e.textContent+=t[o],++o>=t.length&&(clearInterval(n),setTimeout(()=>{currentIndex=(currentIndex+1)%textArray.length,animateText()},2e3))},50)}animateText(),setTimeout(function(){function e(){var e=window.matchMedia("(max-width: 768px)").matches,t=document.getElementById("desktopVideo"),o=document.getElementById("mobileVideo");e?(t.style.display="none",o.style.display="block"):(t.style.display="block",o.style.display="none")}document.addEventListener("DOMContentLoaded",e),window.addEventListener("resize",e)},5e3);



document.addEventListener('DOMContentLoaded', function() {
    function loadVideo(type) {
        const iframeSrc = {
            desktop: "https://www.youtube.com/embed/GIBWr1zXJ_U?autoplay=1&mute=1&showinfo=0&modestbranding=1&controls=0&rel=0&iv_load_policy=3",
            mobile: "https://www.youtube.com/embed/pGtBPQqZmnU?autoplay=1&mute=0&controls=0&modestbranding=1"
        };

        // Create and insert the iframe
        const iframe = document.createElement('iframe');
        iframe.src = iframeSrc[type];
        iframe.allowFullscreen = true;
        iframe.style.width = "100%";
        iframe.style.height = type === 'desktop' ? "470px" : "450px";
        iframe.style.border = "none"; // Remove iframe border

        const container = document.getElementById(type + 'Video');
        container.innerHTML = ''; // Clear previous content
        container.appendChild(iframe);
    }

    function updateVideoVisibility() {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const desktopVideo = document.getElementById("desktopVideo");
        const mobileVideo = document.getElementById("mobileVideo");

        if (isMobile) {
            desktopVideo.style.display = "none";
            mobileVideo.style.display = "block";
            // Lazy load mobile video
            if (mobileVideo.children.length === 0) {
                loadVideo('mobile');
            }
        } else {
            desktopVideo.style.display = "block";
            mobileVideo.style.display = "none";
            // Lazy load desktop video
            if (desktopVideo.children.length === 0) {
                loadVideo('desktop');
            }
        }
    }

    // Intersection Observer for lazy loading when the video container is in view
    function setupIntersectionObserver() {
        const options = {
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const type = entry.target.id.split("Video")[0];
                    loadVideo(type);
                    observer.unobserve(entry.target); // Stop observing after loading
                }
            });
        }, options);

        const desktopVideo = document.getElementById("desktopVideo");
        const mobileVideo = document.getElementById("mobileVideo");

        if (desktopVideo) observer.observe(desktopVideo);
        if (mobileVideo) observer.observe(mobileVideo);
    }

    // Update video visibility on load and resize
    updateVideoVisibility();
    window.addEventListener('resize', updateVideoVisibility);

    // Setup Intersection Observer
    setupIntersectionObserver();
});
