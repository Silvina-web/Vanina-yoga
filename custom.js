gsap.registerPlugin(ScrollTrigger);

const tl= gsap.timeline();

tl.to(".main-conteiner",5,{x:-window.innerWidth})

ScrollTrigger.create({
    animation:tl,
    trigger:".main-conteiner",
    start:"center center",
    end:"+=4000",
    scrub:true,
    pin:true


})
