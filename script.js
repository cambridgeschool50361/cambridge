
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

// 5 Minute Visit Gap
const VISIT_INTERVAL = 5 * 60 * 1000; // 5 minutes

const now = Date.now();
const lastVisit = localStorage.getItem("lastVisitTime");

// Only count a new visit if 5 minutes have passed
if (!lastVisit || (now - parseInt(lastVisit)) > VISIT_INTERVAL) {

    // TOTAL VISITORS
    let totalVisitors = parseInt(localStorage.getItem("totalVisitors")) || 0;
    totalVisitors++;

    localStorage.setItem("totalVisitors", totalVisitors);

    // TODAY VISITORS
    const today = new Date().toLocaleDateString();

    let savedDate = localStorage.getItem("visitDate");
    let todayVisitors = parseInt(localStorage.getItem("todayVisitors")) || 0;

    if (savedDate === today) {
        todayVisitors++;
    } else {
        todayVisitors = 1;
        localStorage.setItem("visitDate", today);
    }

    localStorage.setItem("todayVisitors", todayVisitors);

    // Save visit time
    localStorage.setItem("lastVisitTime", now);
}

// Display Counts
document.getElementById("totalVisitors").innerText =
    localStorage.getItem("totalVisitors") || 0;

document.getElementById("todayVisitors").innerText =
    localStorage.getItem("todayVisitors") || 0;



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

