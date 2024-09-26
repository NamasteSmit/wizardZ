function section1Animation(){

let tl = gsap.timeline();
tl.from('nav h1 , nav h4 , nav button',{
    y : -20,
    opacity : 0,
    duration : 0.5,
    delay : 0,
    stagger : 0.15
})

tl.from('.center-part1 h1 , .center-part1 p',{
    x : -100,
    opacity : 0,
    duration : 0.5,
    stagger : 0.2
})

tl.from('.center-part1 button',{
    opacity : 0,
    duration : 0.5,
})

tl.from('.center-part2',{
    x : 100,
    opacity : 0,
    duration : 0.5,
},"-=1")

}

function section2Animation(){

let tl2 = gsap.timeline({
    scrollTrigger : {
    trigger : '.section-2',
    scroller : 'body',
    start : 'top 50%',
    end : 'top 0%',
    scrub : 2
}
});

tl2.from('.services h3 , .services p',{
     x : -50,
    duration : 0.5,
    opacity : 0,
    stagger : 0.2
})

tl2.from('.elem-cont-1-right , .elem-cont-2-right',{
    x : 300,
    opacity : 0,
    duration : 0.5,
    stagger : 0.2
})

tl2.from('.elem-cont-1-left , .elem-cont-2-left',{
    x : -300,
    opacity : 0,
    duration : 0.5,
    stagger : 0.2
})

}

section1Animation();
section2Animation();

window.addEventListener('wheel', function(dets){
    if(dets.deltaY >0){
     gsap.to('.section1bottom img',{
         transform : 'translateX(-200%)',
         duration : 4,
         repeat : -1,
         ease : 'none'
     });
      }
    else{
     gsap.to('.section1bottom img',{
         transform : 'translateX(0%)',
         duration : 4,
         repeat : -1,
         ease : 'none'
     });
  
    }
 })

 window.addEventListener('mousemove',function(dets){
     gsap.to('.cursor',{
         x : dets.x,
         y : dets.y
     })
; })


const btn = document.querySelector('button');

btn.addEventListener('mouseenter',function(){
     gsap.to('.cursor',{
         scale : 1.5,
         duration : 0.2,
         backgroundColor : 'transparent'
     })
})
btn.addEventListener('mouseleave',function(){
    gsap.to('.cursor',{
        scale : 1,
        duration : 0.2,
        backgroundColor : 'black'
    })
})
    