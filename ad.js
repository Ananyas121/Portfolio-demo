Shery.mouseFollower()
Shery.makeMagnet(".magnet-target") ; 
 var nav=document.querySelector("#nav");

 Shery.imageMasker(".mask-target" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Shery",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

//     Shery.textAnimate(".text-target" /* Element to target.*/, {
//   //Parameters are optional.
//   style: 1,
//   y: 10,
//   delay: 0.1,
//   duration: 2,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   multiplier: 0.1,
// });