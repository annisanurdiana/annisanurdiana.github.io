   window.addEventListener("load", () => {
   const pads = document.querySelectorAll(".pads div");
   const sounds = document.querySelectorAll(".sound");
   const visual = document.querySelector(".visual");
   const colors = [
      "#cbd360",
      "#d36060",
      "#c060d3",
      "#2f91af",
      "#606bd3",
      "#2ea151"
    ];

    //sound-here
   pads.forEach((pad, index)=> {
      pad.addEventListener("click", function() {
         sounds[index].currentTime = 0;
         sounds[index].play();
         createBubbles(index);
      });
   });
});

