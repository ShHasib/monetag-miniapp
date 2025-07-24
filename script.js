document.addEventListener("DOMContentLoaded", function () {
  const startEarningBtn = document.getElementById("startEarningBtn");

  if (startEarningBtn) {
    startEarningBtn.addEventListener("click", function () {
      // 1. Show Ads (Monetag)
      showAd();

      // 2. After ad, redirect to withdraw.html (optional delay)
      setTimeout(() => {
        window.location.href = "withdraw.html";
      }, 1000); // Delay to allow ad click
    });
  }

  // Set progress bar if needed
  const progressBar = document.getElementById("progressBar");
  let totalTasks = 50;
  let completed = 0;
  progressBar.style.width = `${(completed / totalTasks) * 100}%`;
});
