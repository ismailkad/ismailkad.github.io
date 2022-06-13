gsap.registerPlugin("ScrollTrigger")

//Variables
let espoir = 1
let colere = 0
let melancolie = 0
let argent = 3
let guitare = 1

// Intro screen 
gsap.to("#text", {
    x: -1250,
    duration: 3,
    scrollTrigger: {
        trigger: "#text",
        start: "top center",
        scrub: 2,
        pin: ".intro"
    }
})

// Musiques/sons
const soundtrack = document.getElementById('soundtrack');
let bomb = document.querySelector('#bomb');
bomb.volume = 0;

// Scene1 : intro
const scene1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d1",
        start: "top 80%",
        // markers: true,
        // scrub: 1,
        pin: "#scene1",
    },
    default: {
        ease: "power3.out"
    },
    onUpdate: function() {
        soundtrack.volume = soundtrack.volume - scene1.progress() * 0.009
    },
    onComplete: function() {
        gsap.set(bomb, {volume:0.9})
        bomb.play()
    },
});

// Timeline of animation
scene1.to("#sc1_mere", {x: -300, opacity: 1,duration: 1})
scene1.to("#d1", {opacity: 1,duration: 2})
scene1.to("#sc1-d1", {opacity: 1, duration: 1})
scene1.to("#sc1-d1", {opacity: 0, duration: 1})
scene1.to("#sc1_sofia_noa", {x: 250, opacity: 1,duration: 1})
scene1.to("#sc1-d2", {opacity: 1, duration: 1})
scene1.to("#sc1-d2", {opacity: 0, duration: 1})
scene1.to("#sc1-d3", {opacity: 1, duration: 1})
scene1.to("#sc1-d3", {opacity: 0, duration: 1})
scene1.to("#sc1_sofia_noa", {opacity: 0,duration: 1})
scene1.to("#sc1_pere", {x: 250, opacity: 1,duration: 1})
scene1.to("#sc1-d4", {opacity: 1, duration: 1})
scene1.to("#sc1-d4", {opacity: 0, duration: 1})
scene1.to("#sc1_mere", {opacity: 0, duration: 1})
scene1.to("#sc1_noa", {x: -250, opacity: 1,duration: 1})
scene1.to("#sc1-d5", {opacity: 1, duration: 1})
scene1.to("#sc1-d5", {opacity: 0, duration: 1})
scene1.to("#sc1_noa", {opacity: 0,duration: 1}, "-=0.8")
scene1.to("#sc1_pere", {opacity: 0,duration: 1}, "-=0.8")
scene1.to("#d1", {opacity: 0,duration: 1}, "-=0.8")

// Scene 2: decombres

const scene2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d2",
        start: "top 80%",
        // markers: true,
        scrub: 1,
        pin: "#scene2",
    },
    default: {
        ease: "power3.out",
        duration: 2
    },
    // onUpdate: function() {
    //     soundtrack.volume = soundtrack.volume - scene1.progress() * 0.009
    // },
});

// Timeline of animation
scene2.to("#sc2_noa", {x: -250, opacity: 1})
      .to("#d2", {opacity: 1}, "-=1")
      .to("#sc2-d1", {opacity: 1})
      .to("#sc2-d1", {opacity: 0})
      .to("#sc2_sofia", {x: 250, opacity: 1})
      .to("#sc2-d2", {opacity: 1})
      .to("#sc2-d2", {opacity: 0})
      .to("#choix1", {visibility: "visible", opacity: 1})
      scene2.pause();



const choix1 = gsap.timeline({
    paused:true,
    default: {
        duration: 3,
    }
});

choix1.to("#choix1", {visibility: "hidden", opacity: 0})
      .to("#sc2_noa", {opacity: 0})
      .to("#sc2_chauffeur", {x: -250, opacity: 1})
      .to("#sc2-d3", {opacity: 1})
      .to("#sc2-d3", {opacity: 0})
      .to("#sc2_chauffeur", {opacity: 0})
      .to("#sc2_sofia", {opacity: 0}, "-=0.5")
      .to("#d2", {opacity: 0}, "-=0.5")
      


//Choices
$("#sc2_c1").click(function() {
    choix1.play();
    espoir += 1;
});
$("#sc2_c2").click(function() {
    choix1.play();
    colere += 1;
});
$("#sc2_c3").click(function() {
    choix2.play();
    melancolie += 1;
});
      
  
// Scene 4: FERRY PASSEUR

const scene4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d4",
        start: "top 80%",
        markers: true,
        scrub: 1,
        pin: "#scene4",
    },
    default: {
        ease: "power3.out",
        duration: 2
    },
    // onUpdate: function() {
    //     soundtrack.volume = soundtrack.volume - scene1.progress() * 0.009
    // },
});

// Timeline of animation
scene4.to("#sc4_sofia", {x: 250, opacity: 1})
      .to("#d4", {opacity: 1}, "-=1")
      .to("#sc4-d1", {opacity: 1})
      .to("#sc4-d1", {opacity: 0})
      .to("#sc4_noa", {x: -250, opacity: 1})
      .to("#sc4-d2", {opacity: 1})
      .to("#sc4-d2", {opacity: 0})
      .to("#sc4-d3", {opacity: 0})
      .to("#sc4-d3", {opacity: 1})
      .to("#choix2", {visibility: "visible", opacity: 1})
scene4.pause();


const choix2_ferry = gsap.timeline({
    paused:true,
    default: { duration: 3}
});

const choix2_passeur = gsap.timeline({
    paused:true,
    default: { duration: 3}
});

const choix2_passeur_guitare = gsap.timeline({
    paused:true,
    default: { duration: 3}
});


choix2_ferry.to("#choix2", {opacity: 0, visibility: "hidden"})
            .to("#sc4-d3", {opacity: 0})
            .to("#sc4-ferry_1", {opacity: 1})
            .to("#sc4-ferry_1", {opacity: 0})
            .to('#sc4_noa', {opacity: 0})
            .to('#sc4_sofia', {opacity: 0}, "-=0.5")
            .to("#d4", {opacity: 0}, "-=0.5")

choix2_passeur.to("#choix2", {opacity: 0, visibility: "hidden"})
              .to("#sc4-d3", {opacity: 0})
              .to('#sc4-passeur_1', {opacity: 1})
              .to('#sc4-passeur_1', {opacity: 0})
              .to('#sc4-passeur_2', {opacity: 1})
              .to("#choix2_bis", {opacity: 1, visibility: "visible", })

choix2_passeur_guitare.to("#choix2_bis", {opacity: 0, visibility: "hidden"})
                       .to('#sc4-passeur_2', {opacity: 0})
                       .to('#sc4_noa', {opacity: 0})
                       .to('#sc4_sofia', {opacity: 0}, "-=0.5")
                       .to("#d4", {opacity: 0}, "-=0.5")

// CHOIX A FAIRE
// FERRY OU PASSEUR
$("#sc4_c1").click(function() {
    choix2_ferry.play();
});
$("#sc4_c2").click(function() {
    choix2_passeur.play();
    argent -= 2;
});
     
// GUITARE OU NON
$("#sc4_c1_bis").click(function() {
    choix2_passeur_guitare.play();
    argent -= 1;
});
$("#sc4_c2_bis").click(function() {
    choix2_passeur_guitare.play();
    guitare = 0
});
  
// Scene5 : camp
const scene5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d5",
        start: "top 80%",
        markers: true,
        scrub: 1,
        pin: "#scene5",
    },
    default: {
        ease: "power3.out"
    },
});

// Timeline of animation
scene5
.to("#d5", {opacity: 1,duration: 1})
.to("#sc5-d1", {opacity: 1,duration: 1})
.to("#sc5_noa", {x:-250,opacity: 1,duration: 1})
.to("#sc5_sofia", {x: 250, opacity: 1,duration: 1})
.to("#sc5-d1", {opacity: 0,duration: 1})
.to("#sc5-d2", {opacity: 1,duration: 1})
.to("#sc5-d2", {opacity: 0,duration: 1})
.to("#sc5-d3", {opacity: 1,duration: 1})
.to("#sc5-d3", {opacity: 0,duration: 1})
.to("#sc5_noa", {opacity: 0,duration: 1})
.to("#sc5_sofia", {opacity: 0,duration: 1}, "-=0.8")
.to("#d5", {opacity: 0,duration: 1}, "-=0.8")

// Scene 6: CAMP DE NUIT

const scene6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d6",
        start: "top 80%",
        markers: true,
        scrub: 1,
        pin: "#scene6",
    },
    default: {
        ease: "power3.out",
        duration: 2
    },
    // onUpdate: function() {
    //     soundtrack.volume = soundtrack.volume - scene1.progress() * 0.009
    // },
});

const scene6_result = gsap.timeline({
    default: {
        ease: "power3.out",
        duration: 5
    },  
    paused: true,
})
// Timeline of animation
scene6
.to("#d6", {opacity: 1})
.to("#sc6_abel", {x: -250, y: 50, opacity: 1})
.to("#sc6_sofia", {x: 250, opacity: 1}, "-=1")
.to("#sc6-d1", {opacity: 1})
.to("#choix3", {visibility: "visible", opacity: 1})

scene6_result
.to("#choix3", {autoAlpha: 0})
.to("#sc6-d1", {opacity: 0})
.to("#sc6-d2", {opacity: 1, duration: 3})
.to("#sc6-d2", {opacity: 0})
.to("#sc6_abel", {opacity: 0},)
.to("#sc6_sofia", {opacity: 0},)
.to("#d6", {opacity: 0},)


//Choices
$("#sc6_c1").click(function() {
    scene6_result.play();
    espoir += 1;
});
$("#sc6_c2").click(function() {
    scene6_result.play();
    melancolie += 1;
});
$("#sc6_c3").click(function() {
    scene6_result.play();
    colere += 1;
});

// Scene 7: FIN

const scene7_1= gsap.timeline({
    default: {
        ease: "power3.out",
        duration: 2
    },  
    paused: true,
})

const scene7_2= gsap.timeline({
    default: {
        ease: "power3.out",
        duration: 2
    },  
    paused: true,
})

// Timeline of animation
scene7_1
.to("#gare", {opacity: 1})
.to("#fin", {opacity: 0},"-=1")
.to("#d7", {opacity: 1})
.to("#sc7_sofia_joyeuse", {x: 250, opacity: 1},"-=1")
.to("#sc7_noa_joyeux", {x: -250, opacity: 1},"-=1")
.to("#sc7-d1", {opacity: 1, duration: 2})
.to("#sc7-d1", {opacity: 0})
.to("#sc7-d2", {opacity: 1, duration: 2})
.to("#sc7-d2", {opacity: 0})
.to("#sc7_sofia_joyeuse, #sc7_noa_joyeux", {opacity: 0},"-=1")
.to("#sc7_mere", {x: -250, opacity: 1})
.to("#sc7_pere", {x: 250, opacity: 1},"-=1")
.to("#sc7-d3", {opacity: 1, duration: 2})
.to("#sc7-d3", {opacity: 0})
.to("#sc7-d4", {opacity: 1, duration: 2})
.to("#sc7-d4", {opacity: 0})
.to("#sc7_pere, #sc7_mere", {opacity: 0},"-=1")
.to("#d7", {opacity: 0})

scene7_2
.to("#gare", {opacity: 1})
.to("#fin", {opacity: 0},"-=1")
.to("#d7", {opacity: 1})
.to("#sc7_sofia_triste", {x: 250, opacity: 1},"-=1")
.to("#sc7_noa_triste", {x: -250, opacity: 1},"-=1")
.to("#sc7-d5", {opacity: 1, duration: 2})
.to("#sc7-d5", {opacity: 0})
.to("#sc7-d6", {opacity: 1, duration: 2})
.to("#sc7-d6", {opacity: 0})
.to("#sc7_sofia_triste, #sc7_noa_triste", {opacity: 0},"-=1")
.to("#d7", {opacity: 0})



//Choices
$("#fin").click(function() {
    if (espoir > 0 || melancolie > 0 || colere > 0) {
        if (espoir > 1) {
            scene7_1.play();
        }
        else {
            scene7_2.play();
        }
    }
});






  



 








  



 