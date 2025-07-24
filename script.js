// Referral handle
const urlParams = new URLSearchParams(window.location.search);
const ref = urlParams.get('ref');
if (ref) {
  localStorage.setItem('referrer', ref);
}
document.getElementById("ref").innerText = "Referral: " + (localStorage.getItem("referrer") || "None");

// Points system
let points = localStorage.getItem("points") || 0;
document.getElementById("points").innerText = points;

function submitWithdraw() {
  const phone = prompt("📲 Enter your bKash/Nagad number:");
  const referrer = localStorage.getItem("referrer") || "None";

  alert(`Withdraw Request Sent!\nPhone: ${phone}\nPoints: ${points}\nReferrer: ${referrer}`);

  // Later: You can replace this with Google Sheets webhook or database logic
}
