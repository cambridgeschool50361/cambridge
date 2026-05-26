
// INDEX-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// fade animation on load
window.addEventListener("load", () => {
    document.querySelector(".header-info").classList.add("show");
});

// navbar scroll effect
window.addEventListener("scroll", () => {
    document.getElementById("navbar")
    .style.background = window.scrollY > 50 ? "green" : "rgba(0,100,0,0.9)";
});




/* =========================
   SIMPLE VISITOR COUNTER
========================= */

// TOTAL VISITORS
let totalVisitors = localStorage.getItem("totalVisitors");

if(totalVisitors === null){
    totalVisitors = 1;
} else {
    totalVisitors = parseInt(totalVisitors) + 1;
}

localStorage.setItem("totalVisitors", totalVisitors);

document.getElementById("totalVisitors").innerText = totalVisitors;


// TODAY VISITORS
let today = new Date().toLocaleDateString();

let savedDate = localStorage.getItem("visitDate");

let todayVisitors = localStorage.getItem("todayVisitors");

if(savedDate === today){
    todayVisitors = parseInt(todayVisitors) + 1;
} else {
    todayVisitors = 1;
    localStorage.setItem("visitDate", today);
}

localStorage.setItem("todayVisitors", todayVisitors);

document.getElementById("todayVisitors").innerText = todayVisitors;





<!-- Video sound -->
const video = document.getElementById("bgVideo");
const playBtn = document.getElementById("playBtn");
const muteBtn = document.getElementById("muteBtn");

// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = "⏸";
  } else {
    video.pause();
    playBtn.innerHTML = "▶";
  }
}

// Mute / Unmute
function toggleMute() {
  video.muted = !video.muted;
  muteBtn.innerHTML = video.muted ? "🔇" : "🔊";
}


//Our School Facilities

let highlightSlides = document.querySelectorAll(".highlight-slide");
let highlightIndex = 0;

function showHighlightSlide() {
  highlightSlides.forEach(slide => slide.classList.remove("active"));
  highlightSlides[highlightIndex].classList.add("active");

  highlightIndex = (highlightIndex + 1) % highlightSlides.length;
}

// Separate timer
setInterval(showHighlightSlide, 3000);

// INDEX END-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// INDEX-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
