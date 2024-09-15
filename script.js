function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
}
locomotiveAnimation();

gsap.to(".nav-part-1 svg",{
    transform:"translateY(-100%)",
    transition: "ease 0.4s",
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        start:"top 0%",
        end: " top -5%",
        scrub: true
    }
})
gsap.to(".nav-part-2 .links",{
    transform:"translateY(-100%)",
    transition: "ease 0.4s",
    opacity:0,
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        start:"top 0%",
        end: " top -5%",
        scrub: true
    }
})
gsap.from(".nav-part-1 svg",{
    transform:"translateY(100%)",
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        start:"top 0%",
        end: " top -5%",
        scrub: true
    }
})

function videoconAnimation(){
    var v= document.querySelector("#video-container");
    var playbtn = document.querySelector("#play")
    v.addEventListener("mouseenter", function(){
        gsap.to(playbtn,{
            scale:1,
            opacity:1
        })
    })
    v.addEventListener("mouseleave", function(){
        gsap.to(playbtn, {
            scale:0,
            opacity:0
        })
    })
    v.addEventListener("mousemove", function(dets){
        gsap.to(playbtn, {
            left:dets.x-1,
            top:dets.y-1
        })
    })
}
videoconAnimation();

function loadingAnimation(){
    gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay:0.5,
        duration:1,
        stagger:0.3
    })
    gsap.from("#video-container", {
        scale:0.9,
        opacity:0,
        delay:1.2,
        duration:0.5,
    })
}
loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to(".cursor", {
            left:dets.x,
            top:dets.y
        })
    })
    
    var a = document.querySelectorAll(".child");
    
        a.forEach(function(elem){
            elem.addEventListener("mouseenter", function(){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(3)'
            });
        });
    });
    
        a.forEach(function(elem){
            elem.addEventListener("mouseleave", function(){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(0)'
            });
        });
    });
}
cursorAnimation();