gsap.registerPlugin(ScrollTrigger);

const tl= gsap.timeline();

ScrollTrigger.matchMedia({
  "(min-width:800px)": function(){

    tl.to(".main-conteiner",5,{x:-window.innerWidth})
  .from(".seccion2 h1",5,{opacity:0,scale:3})

  .to(".main-conteiner",5,{x:-window.innerWidth*2})
  .from(".seccion3 h1",5,{opacity:0,scale:5})

  .to(".main-conteiner",5,{x:-window.innerWidth*3})
  .from(".seccion4 h1",5,{opacity:0,scale:3})

  .to(".main-conteiner",5,{x:-window.innerWidth*4})
  .from(".seccion5 h1",5,{opacity:0,scale:3})

 

 

ScrollTrigger.create({
    animation:tl,
    trigger:".main-conteiner",  
    start:"center center",
    end:"+=4000",
    scrub:true,
    pin:true,

  })
}
});

// tl.to(".main-conteiner",5,{x:-window.innerWidth})
//   .from(".seccion2 h1",5,{opacity:0,scale:3})

//   .to(".main-conteiner",5,{x:-window.innerWidth*2})
//   .from(".seccion3 h1",5,{opacity:0,scale:3})

//   .to(".main-conteiner",5,{x:-window.innerWidth*3})
//   .from(".seccion4 h1",5,{opacity:0,scale:3})

 

 

// ScrollTrigger.create({
//     animation:tl,
//     trigger:".main-conteiner",  
//     start:"center center",
//     end:"+=3000",
//     scrub:true,
//     pin:true,


// });
