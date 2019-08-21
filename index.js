window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#cf455c",
        "#ffdd67",
        "#00a79d",
        "#ff8a5c",
        "#444444",
        "#843b62"
    ];

    //lets get going with ttge sounds

    pads.forEach((pad, index) => {
      pad.addEventListener('click', function() {
          sounds[index].currentTime = 0;
          sounds[index].play();

          createBubble(index);
      });
    });

// create a function to create bubble

const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});