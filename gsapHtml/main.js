gsap.to(".box", { 
    x: 200,
    y:200,
    
  });


  var tl = gsap.timeline();
  tl.fromTo(".drawme", { duration: 5, drawSVG:"0% 10%"}, { duration: 5, drawSVG:"90% 100%"}, );




  var tl1 = gsap.timeline();
  tl1.fromTo(".line1", { duration: 5,  drawSVG:"10% 20%",   }, { duration: 2, drawSVG:"120% 100%", repeat:-1,  }, );

  var tl2 = gsap.timeline();
  tl2.fromTo(".line2", {   drawSVG:"5% 0%",  } , { duration: 4, drawSVG:"110% 100%", repeat:-1 ,ease: "power1.in", },  );


  var tl3 = gsap.timeline();
  tl3.fromTo(".line3", {  drawSVG:"10% 0%",   }, { duration: 4, drawSVG:"110% 100%", repeat:-1, ease: "power1.in",},  );


  var tl4 = gsap.timeline();
  tl4.fromTo(".line4", {  drawSVG:"15% 0%",  }, { duration: 4, drawSVG:"110% 100%", repeat:-1, ease: "power1.in",},   );


  var tl5 = gsap.timeline();
  tl5.fromTo(".line5", {   drawSVG:"20% 0%",  }, { duration: 4, drawSVG:"110% 100%", repeat:-1, ease: "power1.in",},  );


  var tl6 = gsap.timeline();
  tl6.fromTo(".line6", {   drawSVG:"30% 0%",   }, { duration: 4, drawSVG:"110% 100%", repeat:-1, ease: "power1.in",},   );



  gsap.to(".morph2", { duration: 1, morphSVG: ".morph1",  repeat:-1, yoyo:true, ease: "sine.out", });



  // var tl11 = gsap.timeline();
  // tl11.fromTo(".line1", { duration: 5,  drawSVG:"10% 20%",   }, { duration: 2, drawSVG:"120% 100%", repeat:-1,  }, );
