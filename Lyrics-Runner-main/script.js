document.addEventListener("DOMContentLoaded", (event) => {
  const playBtn = document.querySelector(".play-btn");
  const body = document.querySelector(".body");
  const lyricsContainer = document.getElementById("lyrics");

  const lyrics = [
      { text: "I just wanna rewind", delay: 0.05 },
      { text: "I haven’t seen you in a long time", delay: 0.08 },
      { text: "You got me feelin' so lonely", delay: 0.05 },
      { text: "Even when you come through", delay: 0.05 },
      { text: "I can tell that it isn't you", delay: 0.04 },
      { text: "So baby, bring it in closely", delay: 0.07 },
      { text: "Hate the way I love you, but you're so sweet", delay: 0.08 },
      { text: "I always find a way to say the wrong things", delay: 0.044 },
      { text: "I wish that we were layin' in the same sheets", delay: 0.045 },
      { text: "But lately, you've been actin' like you hardly know me", delay: 0.05 },
      { text: "[Chorus]", delay: 0.05 },
      { text: "Baby, come home", delay: 0.05 },
      { text: "(So baby, won't you say somethin'?)", delay: 0.05 },
      { text: "Home", delay: 0.05 },
      { text: "Baby, come home", delay: 0.05 },
      { text: "(So baby, won't you say somethin'?)", delay: 0.05 },
      { text: "Home", delay: 0.05 },
      { text: "Baby, come home", delay: 0.05 },
      { text: "(So baby, won't you say somethin'?)", delay: 0.05 },
      { text: "Home", delay: 0.05 },
      { text: "Baby, come home", delay: 0.05 },
      { text: "(So baby, won't you say somethin'?)", delay: 0.05 },
      { text: "Home", delay: 0.05 },
      { text: "[Refrain]", delay: 0.05 },
      { text: "I just wanna rewind", delay: 0.05 },
      { text: "I haven't seen you in a long time", delay: 0.05 },
      { text: "You got me feelin' so lonely", delay: 0.05 },
      { text: "Even when you come through", delay: 0.05 },
      { text: "I can tell that it isn't you", delay: 0.05 },
      { text: "So baby, bring it in closely", delay: 0.05 },
      
    ];
  
    const delays = [
      0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5
    ];
  
  async function displayLyrics() {
    for (let i = 0; i < lyrics.length; i++) {
      let line = lyrics[i].text;
      let charDelay = lyrics[i].delay;
      for (let char of line) {
        lyricsContainer.innerHTML += char;
        await new Promise((resolve) => setTimeout(resolve, charDelay * 1000));
      }
      await new Promise((resolve) => setTimeout(resolve, delays[i] * 1000));
      lyricsContainer.innerHTML += "\n";
      lyricsContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
  }

  playBtn.addEventListener("click", () => {
    playBtn.style.display = "none";

    const backgroundFade = document.createElement("div");
    backgroundFade.className = "background-fade";
    body.appendChild(backgroundFade);

    // Müzik çal
    const audio = new Audio('Hotel Ugly - Shut Up My Moms Calling (Lyrics).mp3'); // Müziğin dosya yolunu buraya ekleyin
    audio.play();

    displayLyrics();
  });
});
