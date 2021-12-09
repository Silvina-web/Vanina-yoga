gsap.registerPlugin(ScrollTrigger);

// const tl= gsap.timeline();

// tl.to(".main-conteiner",5,{x:-window.innerWidth})
//   .from(".seccion2 h1",5,{opacity:0,scale:3})

//   .to(".main-conteiner",5,{x:-window.innerWidth*2})
//   .from(".seccion3 h1",5,{opacity:0,scale:3})

//   .to(".main-conteiner",5,{x:-window.innerWidth*3})
//   .from(".seccion4 h1",5,{opacity:0,scale:3})

//   .to(".main-conteiner",5,{x:-window.innerWidth*4})
//   .from(".seccion5 h1",5,{opacity:0,scale:3})

 

// ScrollTrigger.create({
//     animation:tl,
//     trigger:".main-conteiner",  
//     start:"center center",
//     end:"+=4000",
//     scrub:true,
//     pin:true


// })
//ScrollTrigger.saveStyles(".seccion1, seccion2, seccion3, seccion4");


ScrollTrigger.matchMedia({
  //desktop
  "(min-width:800px":function(){

  const tl= gsap.timeline();

  tl.to(".main-conteiner",5,{x:-window.innerWidth})
  .from(".seccion2 h1",5,{opacity:0,scale:3})

  .to(".main-conteiner",5,{x:-window.innerWidth*2})
  .from(".seccion3 h1",5,{opacity:0,scale:3})

  .to(".main-conteiner",5,{x:-window.innerWidth*3})
  .from(".seccion4 h1",5,{opacity:0,scale:3})

  // .to(".main-conteiner",5,{x:-window.innerWidth*4})
  // .from(".seccion5 h1",5,{opacity:0,scale:3})

 

ScrollTrigger.create({
    animation:tl,
    trigger:".main-conteiner",
    start:"center center",
    end:"+=4000",
    scrub:true,
    pin:true


})


  },


  //mobile
  "(max-width:799 px)": function(){
    const tl= gsap.timeline();

   tl.to(".main-conteiner",5,{x:-window.innerWidth})
  .from(".seccion2 h1",5,{opacity:0,scale:3})

  .to(".main-conteiner",5,{x:-window.innerWidth*2})
  .from(".seccion3 h1",5,{opacity:0,scale:3})

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


  },

  "all": function(){
    
  }

})
