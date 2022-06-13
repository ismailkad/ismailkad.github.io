gsap.registerPlugin("ScrollTrigger")

//Variables
let espoir = 0
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
        scrub: 3,
        pin: ".intro"
    }
})

// Musiques/sons
let soundtrack = document.getElementById('soundtrack');
let musique_melancolie = document.getElementById('melancolie');
// musique_melancolie.volume = 0;
let musique_espoir = document.getElementById('espoir');
musique_espoir.volume = 0;
let musique_colere = document.getElementById('colere');
musique_colere.volume = 0;
let musique_enigme = document.getElementById('enigme');
musique_enigme.volume = 0;
let musique_guitare = document.getElementById('guitare');
// musique_guitare.volume = 0;

// Interscene1 : intro
const interscene_intro = gsap.timeline({
    scrollTrigger: {
        trigger: "#interscene_intro",
        start: "top 50%",
        pin: "#sep_intro",
    },
});

interscene_intro
.to("#interscene_intro", {opacity: 1, duration: 8})

// Scene1 : intro
const scene1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d1",
        start: "top 80%",
        // markers: true,
        scrub: 5,
        pin: "#scene1",
    },
    default: {
        ease: "power3.out"
    },
    // onComplete: function() {
    //     gsap.set(bomb, {volume:0.9})
    //     bomb.play()
    // },
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

// Interscene1 : guerre
const interscene1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#interscene_guerre",
        start: "top center",
        end: "bottom 10%",
        // markers: true,
        pin: "#sep_guerre",
    },
    onUpdate: function() {
        soundtrack.volume = soundtrack.volume - interscene1.progress() * 0.009
    },
});

interscene1
.to("#interscene_guerre", {opacity: 1, duration: 8})

// Scene 2: decombres

const scene2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d2",
        start: "top 80%",
        toggleActions: "play reset complete complete",
        // markers: true,
        scrub: 1,
        pin: "#scene2",
    },
    default: {
        ease: "power3.out",
        duration: 2
    },
    onStart: function() {
        musique_melancolie.play()
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
      .to("#choix1", {opacity: 1})



const choix1 = gsap.timeline({
    paused:true,
    default: {
        duration: 3,
    }
});

choix1.to("#choix1", {visibility: "hidden", opacity: 0})
      .to("#sc2_noa", {opacity: 0})
      .to("#sc2_chauffeur", {x: -250, opacity: 1})
      .to("#sc2-d3", {opacity: 1, duration:2})
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
      

// Interscene2 : bus
const interscene2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#interscene_ruine",
        start: "top 50%",
        pin: "#sep_ruine",
    },
});

interscene2
.to("#interscene_ruine", {opacity: 1, duration: 8})

// Scene 3: BUS

const scene3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d3",
        start: "top 80%",
        scrub: 1,
        pin: "#scene3",
    },
    default: {
        ease: "power3.out",
        duration: 2
    },
    onStart: function() {
        musique_espoir.play()
    },
    onUpdate: function() {
        musique_melancolie.volume = musique_melancolie.volume - scene3.progress() * 0.2
        musique_espoir.volume = musique_espoir.volume + scene3.progress() * 0.03
    },
});

// Timeline of animation
scene3.to("#sc3_noa", {x: -250, opacity: 1})
      .to("#d3", {opacity: 1}, "-=1")
      .to("#sc3-d1", {opacity: 1})
      .to("#sc3-d1", {opacity: 0})
      .to("#sc3_sofia", {x: 250, opacity: 1})
      .to("#sc3-d2", {opacity: 1})
      .to("#sc3-d2", {opacity: 0})
      .to("#sc3_sofia, #sc3_noa", {opacity: 0})
      .to("#sc3_sofia_noa", {opacity: 1})
      .to("#d3", {opacity: 0})
      .to("#sc3_sofia_noa", {opacity: 0})

// Interscene3 : frontière
const interscene3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#interscene_frontiere",
        start: "top 50%",
        pin: "#sep_frontiere",
    },
    onUpdate: function() {
        musique_espoir.volume = musique_espoir.volume - interscene3.progress() * 0.3
    },
});

interscene3
.to("#interscene_frontiere", {opacity: 1, duration: 8})

// Scene 3bis: guitare

const scene3b = gsap.timeline({
    scrollTrigger: {
        trigger: "#d3b",
        start: "top 80%",
        pin: "#scene3b",
        // markers: true,
        scrub: 1,
    },
    default: {
        ease: "power3.out",
        duration: 2
    },
    onUpdate: function() {
        musique_espoir.volume -= scene3b.progress() * 0.03
    },
});

// Timeline of animation
scene3b
.to("#d3b", {opacity: 1, duration: 3})
.to("#sc3b_noa", {x: -250, opacity: 1}, "-=1")
.to("#sc3b_sofia", {x: 250, opacity: 1}, "-=1")
.to("#sc3b-d1", {opacity: 1})
.to("#sc3b-d1", {opacity: 0})
.to("#sc3b-d2", {opacity: 1})
.to("#sc3b-d2", {opacity: 0})
.to("#sc3b-d3", {opacity: 1})
.to("#sc3b-d3", {opacity: 0})
.to("#sc3b_noa", {opacity: 0}, "-=1")
.to("#sc3b_sofia", {opacity: 0}, "-=1")
.to("#d3b", {opacity: 0})
.to("#sc3b_sofia_noa", {opacity: 1, duration: 10, onStart: function() { musique_guitare.play()}},"-=1")
.to("#sc3b_sofia_noa", {opacity: 0})

// Interscene3 : frontière bis
const interscene3b = gsap.timeline({
    scrollTrigger: {
        trigger: "#interscene_frontiere_b",
        start: "top 50%",
        pin: "#sep_frontiere_b",
    },
    onUpdate: function() {
        musique_guitare.volume = musique_guitare.volume - interscene3b.progress() * 0.3
    },
});

interscene3b
.to("#interscene_frontiere_b", {opacity: 1, duration: 8})

// Scene 4: FERRY PASSEUR

const scene4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d4",
        start: "top 80%",
        // markers: true,
        scrub: 1,
        pin: "#scene4",
    },
    default: {
        ease: "power3.out",
        duration: 2
    },
    onStart: function() {
        musique_enigme.play()
    },
    onUpdate: function() {
        musique_enigme.volume = musique_enigme.volume + scene4.progress() * 0.2
    },
});


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

// Timeline of animation
scene4
.to("#sc4_sofia", {x: 250, opacity: 1})
.to("#d4", {opacity: 1}, "-=1")
.to("#sc4-d1", {opacity: 1})
.to("#sc4-d1", {opacity: 0})
.to("#sc4_noa", {x: -250, opacity: 1})
.to("#sc4-d2", {opacity: 1})
.to("#sc4-d2", {opacity: 0})
.to("#sc4-d3", {opacity: 0})
.to("#sc4-d3", {opacity: 1})
.to("#choix2", {opacity: 1})

choix2_ferry
.to("#choix2", {opacity: 0, visibility: "hidden"})
.to("#sc4-d3", {opacity: 0})
.to("#sc4-ferry_1", {opacity: 1})
.to("#sc4-ferry_1", {opacity: 0})
.to('#sc4_noa', {opacity: 0})
.to('#sc4_sofia', {opacity: 0}, "-=0.5")
.to("#d4", {opacity: 0}, "-=0.5")

choix2_passeur
.to("#choix2", {opacity: 0, visibility: "hidden"})
.to("#sc4-d3", {opacity: 0})
.to('#sc4-passeur_1', {opacity: 1})
.to('#sc4-passeur_1', {opacity: 0})
.to('#sc4-passeur_2', {opacity: 1})
.to("#choix2_bis", {opacity: 1, visibility: "visible", })

choix2_passeur_guitare
.to("#choix2_bis", {opacity: 0, visibility: "hidden"})
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


// Interscene4 : camp
const interscene4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#interscene_camp",
        start: "top 50%",
        pin: "#sep_camp",
    },
    onUpdate: function() {
        musique_enigme.volume = musique_enigme.volume - interscene4.progress() * 0.3
    }
    
});

interscene4
.to("#interscene_camp", {opacity: 1, duration: 8})

// Scene5 : camp
const scene5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d5",
        start: "top 80%",
        // markers: true,
        scrub: 1,
        pin: "#scene5",
    },
    onStart: function() {
        soundtrack.volumne = 0.001;
        soundtrack.play();
        
    },
    onUpdate: function() {
        soundtrack.volume += scene5.progress() * 0.3
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

// Interscene5 : camp nuit
const interscene5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#interscene_camp_nuit",
        start: "top 50%",
        pin: "#sep_camp_nuit",
    },
    onUpdate: function() {
        soundtrack.volume -= interscene5.progress() * 0.2
    },
});

interscene5
.to("#interscene_camp_nuit", {opacity: 1, duration: 8})

// Scene 6: CAMP DE NUIT

const scene6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#d6",
        start: "top 80%",
        // markers: true,
        scrub: 1,
        pin: "#scene6",
    },
    default: {
        ease: "power3.out",
        duration: 2
    },
    onStart: function() {
        musique_colere.volume = 1;
        musique_colere.play()
    },
    onUpdate: function() {
        soundtrack.volume -= scene6.progress() * 0.3
        musique_colere.volume += scene6.progress() * 0.3
    },
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
.to("#choix3", {opacity: 1})

scene6_result
.to("#choix3", {visibility: "hidden", opacity: 0})
.to("#sc6-d1", {opacity: 0})
.to("#sc6-d2", {opacity: 1, duration: 3})
.to("#sc6-d2", {opacity: 0})
.to("#sc6_abel", {opacity: 0})
.to("#sc6_sofia", {opacity: 0},"-=1")
.to("#d6", {opacity: 0},"-=1")


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

// Interscene6 : gare
const interscene6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#interscene_gare",
        start: "top 50%",
        pin: "#sep_gare",
    },
    onUpdate: function() {
        musique_colere.volume -= interscene6.progress()*0.2
    }
});

interscene6
.to("#interscene_gare", {opacity: 1, duration: 8})

// Scene 7: FIN

const scene7_1= gsap.timeline({
    default: {
        ease: "power3.out",
        duration: 2
    }, 
    onStart: function() {
        musique_espoir.volume = 1;
        musique_espoir.play()
    },
    paused: true,
})

const scene7_2= gsap.timeline({
    default: {
        ease: "power3.out",
        duration: 2
    },  
    onStart: function() {
        musique_melancolie.volume = 1;
        musique_melancolie.play();
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
    if (argent >= 2) {
        melancolie += 1
    };
    if (guitare === 1) {
        espoir += 1
    };
    if (espoir > 0 || melancolie > 0 || colere > 0) {
        if (espoir > 1) {
            scene7_1.play();
        }
        else {
            scene7_2.play();
        }
    }
});

const interscene_fin = gsap.timeline({
    scrollTrigger: {
        trigger: "#interscene_fin",
        start: "top 50%",
        pin: "#sep_fin",
    },
});

interscene_fin
.to("#interscene_fin", {opacity: 1, duration: 8})




  



 








  



 